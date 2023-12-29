import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Settings,
  BatteryFull,
  BatteryLow,
  BatteryCharging,
  Wifi,
  WifiOff,
  X,
} from "lucide-react";
import anime from "animejs/lib/anime.es.js";
import Setting from "./Setting.jsx";

const log = console.log;

const routeNames = [
  { id: 0, to: "/", n: "Home" },
  { id: 1, to: "/about", n: "About" },
  { id: 2, to: "/galler", n: "Gallery" },
  { id: 3, to: "/contact", n: "Contact" },
];

export default function Nav(props) {
  let [dx, setDx] = useState(1);

  const handleNavHover = (e) => {
    setDx((x) => (x = e.target.dataset.dx));
  };

  return (
    <nav
      className={props.isMobile ? "nav" : "nav rad fx fx-btw shadow pos-rel"}
    >
      <div
        className={
          props.isMobile ? "nav-routes" : "nav-routes pos-rel fx fx-cn fx-even "
        }
      >
        {routeNames.map((route) => (
          <Link
            to={route.to}
            data-dx={route.id}
            onPointerOver={handleNavHover}
            key={route.id}
          >
            {route.n}
          </Link>
        ))}
        <span className="nav-click trans pos-abs" style={{ "--x": dx }}></span>
      </div>

      <div
        className={props.isMobile ? "nav-info" : "nav-info fx fx-cn fx-even"}
      >
        <Settings stroke="#68707d" onClick={props.handleShowSetting} />
        {props.isOnline ? (
          <Wifi stroke="#28ff98" onClick={props.handleShowNetwork} />
        ) : (
          <WifiOff stroke="#ff5a5a" onClick={props.handleShowNetwork} />
        )}
        {props.batteryFull && !props.batteryCharging ? (
          <BatteryFull stroke="#28ff98" onClick={props.handleShowBattery} />
        ) : props.batteryCharging ? (
          <BatteryCharging stroke="#28ff98" onClick={props.handleShowBattery} />
        ) : (
          <BatteryLow stroke="#ff5a5a" onClick={props.handleShowBattery} />
        )}
        {/* <div className="nav-click"></div> */}
      </div>

      {props.showBattery ? (
        <BatteryInfo
          batteryFull={props.batteryFull}
          charging={props.batteryCharging}
          level={props.batteryLevel}
          handleShowBattery={props.handleShowBattery}
        />
      ) : (
        <></>
      )}
      {props.showNetwork ? (
        <NetworkInfo
          effectiveType={props.networkEffectiveType}
          type={props.networkType}
          online={props.isOnline}
          handleShowNetwork={props.handleShowNetwork}
        />
      ) : (
        <></>
      )}
      {props.showSetting ? (
        <Setting
          isLight={props.isLight}
          isDark={props.isDark}
          handleTheme={props.handleTheme}
        />
      ) : (
        <></>
      )}
    </nav>
  );
}

export function BatteryInfo(props) {
  return (
    <div className="battery-info enter trans pos-abs rad fx fx-col fx-even">
      <span className="txt-white">
        Level:
        <i className={props.level > 16 ? "txt-lgreen" : "txt-danger"}>
          {" "}
          {props.level}%
        </i>
      </span>
      <span className="txt-white">
        Status:
        <i className={props.batteryFull ? "txt-lgreen" : "txt-danger"}>
          {props.batteryFull ? " Good" : " Please Charge"}
        </i>
      </span>
      <span className="txt-white">
        Charging:
        <i className={props.charging ? "txt-lgreen" : "txt-lenvmap"}>
          {props.charging ? " Yes" : " No"}
        </i>
      </span>

      <X
        stroke="#68707d"
        className="pos-abs rad-round"
        onClick={props.handleShowBattery}
      />
    </div>
  );
}

export function NetworkInfo(props) {
  return (
    <div className="network-info enter trans pos-abs fx fx-col fx-even rad">
      <span className="txt-white">
        Effective Type: <i className="txt-lgreen"> {props.effectiveType}</i>
      </span>
      <span className="txt-white">
        Type:{" "}
        <i className={props.online ? "txt-lgreen" : "txt-lenvmap"}>
          {" "}
          {props.type}
        </i>
      </span>
      <span className="txt-white">
        Online:{" "}
        <i className={props.online ? "txt-lgreen" : "txt-danger"}>
          {" "}
          {props.online ? "Yes" : "No"}
        </i>
      </span>
      <X
        stroke="#68707d"
        className="rad-round pos-abs"
        onClick={props.handleShowNetwork}
      />
    </div>
  );
}
