import { Link } from "react-router-dom";
import { useState, useEffect, forwardRef, useRef } from "react";
import {
  Settings,
  BatteryFull,
  BatteryLow,
  BatteryCharging,
  Wifi,
  WifiOff,
  X,
  CircleUser,
  PhoneCall,
  Home,
  GalleryHorizontalEnd,
  Menu,
  XSquare,
} from "lucide-react";
import anime from "animejs/lib/anime.es.js";
import Setting from "./Setting.jsx";
import T from "./T.jsx";

const log = console.log;

const routeNames = [
  { id: 0, to: "/", n: "Home" },
  { id: 1, to: "/about", n: "About" },
  { id: 2, to: "/galler", n: "Gallery" },
  { id: 3, to: "/contact", n: "Contact" },
];

const routeIcons = [
  { id: 0, to: "/", icon: <Home stroke="#68707d" /> },
  { id: 1, to: "/about", icon: <CircleUser stroke="#68707d" /> },
  { id: 2, to: "/galler", icon: <GalleryHorizontalEnd stroke="#68707d" /> },
  { id: 3, to: "/contact", icon: <PhoneCall stroke="#68707d" /> },
];

const NetworkInfo = forwardRef((props, ref) => {
  return (
    <div
      className="network-info enter trans pos-abs fx fx-col fx-even rad hide"
      ref={ref}
    >
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
});

const BatteryInfo = forwardRef((props, ref) => {
  return (
    <div
      className="battery-info enter trans pos-abs rad fx fx-col fx-even hide"
      ref={ref}
    >
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
});

export default function Nav(props) {
  let [dx, setDx] = useState(1);
  let [showMenu, setShowMenu] = useState(false);

  let [navRouteRef, navInfoRef] = [useRef(null, useRef(null))];

  const handleNavHover = (e) => {
    setDx((x) => (x = e.target.dataset.dx));
  };
  const handleShowMenu = (e) => {
    setShowMenu((r) => !r);
  };

  return (
    <nav
      className={
        props.isMobile
          ? "nav rad fx fx-btw fx-cn shadow"
          : "nav rad fx fx-btw shadow pos-rel"
      }
    >
      <div
        className={
          props.isMobile
            ? `nav-routes fx fx-even pos-fix rad shadow ${
                showMenu ? "enter" : "leave"
              }`
            : "nav-routes pos-rel fx fx-cn fx-even "
        }
        ref={navRouteRef}
      >
        {!props.isMobile &&
          routeNames.map((route) => (
            <Link
              to={route.to}
              data-dx={route.id}
              onPointerOver={handleNavHover}
              key={route.id}
              className={props.isMobile ? "txt-bold" : "txt-bold txt-fsm"}
            >
              {route.n}
            </Link>
          ))}
        {props.isMobile &&
          routeIcons.map((route) => (
            <Link to={route.to} key={route.id}>
              {route.icon}
            </Link>
          ))}
        {!props.isMobile ? (
          <span
            className="nav-click trans pos-abs"
            style={{ "--x": dx }}
          ></span>
        ) : (
          void 0
        )}
      </div>

      <div
        className={
          props.isMobile
            ? `nav-info pos-fix rad shadow fx fx-col fx-cn fx-even ${
                showMenu ? "enter" : "leave"
              }`
            : "nav-info fx fx-cn fx-even"
        }
        ref={navInfoRef}
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
      </div>

      {
        <T visible={props.showBattery}>
          <BatteryInfo
            batteryFull={props.batteryFull}
            charging={props.batteryCharging}
            level={props.batteryLevel}
            handleShowBattery={props.handleShowBattery}
          />
        </T>
      }
      {
        <T visible={props.showNetwork}>
          <NetworkInfo
            effectiveType={props.networkEffectiveType}
            type={props.networkType}
            online={props.isOnline}
            handleShowNetwork={props.handleShowNetwork}
          />
        </T>
      }
      {
        <T visible={props.showSetting}>
          <Setting
            isLight={props.isLight}
            isDark={props.isDark}
            handleTheme={props.handleTheme}
          />
        </T>
      }
      {props.isMobile ? (
        <>
          <h2 className="txt-lgreen txt-flg"> . </h2>
          {showMenu ? (
            <X
              stroke="#ff5a5a"
              width="35"
              height="35"
              onClick={handleShowMenu}
            />
          ) : (
            <Menu
              stroke="#68707d"
              height="35"
              width="35"
              onClick={handleShowMenu}
            />
          )}
        </>
      ) : (
        void 0
      )}
    </nav>
  );
}
