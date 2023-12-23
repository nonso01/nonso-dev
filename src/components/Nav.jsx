import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Settings,
  BatteryFull,
  BatteryLow,
  BatteryCharging,
  Wifi,
  WifiOff,
} from "lucide-react";

// const log = console.log

const routeNames = [
  { id: 0, to: "/about", n: "About" },
  { id: 1, to: "/blog", n: "Blog" },
  { id: 2, to: "/gallery", n: "Gallery" },
  { id: 3, to: "/contact", n: "Contact" },
];

export default function Nav(props) {
  let [dx, setDx] = useState(1);

  const handleNavHover = (e) => {
    setDx((x) => (x = e.target.dataset.dx));
  };

  return (
    <nav className={props.isMobile ? "nav" : "nav rad fx fx-btw "}>
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
        <Settings stroke="#68707d" />
        {props.isOnline ? (
          <Wifi stroke="#28ff98" />
        ) : (
          <WifiOff stroke="#ff5a5a" />
        )}
        {props.batteryFull && !props.batteryCharging ? (
          <BatteryFull stroke="#28ff98" />
        ) : props.batteryCharging ? (
          <BatteryCharging stroke="#28ff98" />
        ) : (
          <BatteryLow stroke="#ff5a5a" />
        )}
        <div className="nav-click"></div>
      </div>
    </nav>
  );
}
