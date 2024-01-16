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
} from "lucide-react";
import anime from "animejs/lib/anime.es.js";
import Setting from "./Setting.jsx";
import T, { t } from "./T.jsx";
import LogoIcon from "./LogoIcon.jsx";
import NonsoLogoPng from "../assets/logos/bitmap.png";

const log = console.log;

const routeNames = [
  {
    id: 0,
    to: "/",
    n: "Home",
    icon: <Home stroke="var(--app-main-low-envmap)" />,
  },
  {
    id: 1,
    to: "/about",
    n: "About",
    icon: <CircleUser stroke="var(--app-main-low-envmap)" />,
  },
  {
    id: 2,
    to: "/galler",
    n: "Gallery",
    icon: <GalleryHorizontalEnd stroke="var(--app-main-low-envmap)" />,
  },
  {
    id: 3,
    to: "/contact",
    n: "Contact",
    icon: <PhoneCall stroke="var(--app-main-low-envmap)" />,
  },
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
        stroke="var(--app-main-low-envmap)"
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
        stroke="var(--app-main-low-envmap)"
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

  const resetMenuOnceQueryChanges = useEffect(() => {
    !props.isMobile ? setShowMenu((r) => (r = false)) : void 0;
  }, [props.isMobile]);

  const navAnimationForMobile = useEffect(() => {
    try {
      const _a = anime({
        targets: ".lucide-menu *, .lucide-x *",
        duration: 1.5e3,
        strokeDashoffset: [anime.setDashoffset, 0],
      });

      anime.set(".nav-routes .lucide *, .nav-info .lucide *", { scale: 0 });

      const _b = anime({
        targets: ".nav-routes .lucide *",
        delay: anime.stagger(100),
        keyframes: [{ scale: 1.4 }, { scale: 1 }],
      });

      const _c = anime({
        targets: ".nav-info .lucide *",
        delay: anime.stagger(100),
        translateX: [{ value: -40 }, { value: -10 }, { value: 0 }],
        scale: [{ value: 0.4 }, { value: 1 }],
      });
      if (props.isMobile) {
        t({
          target: ".nav-routes",
          visible: showMenu,
          leave: "leave",
          enter: "enter",
        });
        t({
          target: ".nav-info",
          visible: showMenu,
          leave: "leave",
          enter: "enter",
        });
      }
    } catch (e) {
      log(e);
    }
  }, [showMenu]);

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
            ? `nav-routes fx fx-even pos-fix rad shadow hide`
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
          routeNames.map((route) => (
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
            ? `nav-info pos-fix rad shadow fx fx-col fx-cn fx-even hide`
            : "nav-info fx fx-cn fx-even"
        }
        ref={navInfoRef}
      >
        <Settings
          stroke="var(--app-main-low-envmap)"
          onClick={props.handleShowSetting}
        />
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
            handleShowSetting={props.handleShowSetting}
          />
        </T>
      }
      {props.isMobile ? (
        <>
          <div className="nonso-logo pos-rel fx fx-cn">
            <LogoIcon animate fill />
          </div>
          {showMenu ? (
            <X
              stroke="var(--app-main-low-envmap)"
              className="pos-rel"
              width="35"
              height="35"
              onClick={handleShowMenu}
            />
          ) : (
            <Menu
              stroke="var(--app-main-low-envmap)"
              className="pos-rel"
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
