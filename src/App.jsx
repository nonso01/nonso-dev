import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Text from "./components/Text.jsx";
import Nav from "./components/Nav.jsx";
import Button from "./components/Button.jsx";
import H3d from "./components/Header3d.jsx";
import { on } from "./components/util.js";
//

const log = console.log;
const minBatteryLevel = 16 / 100;

export default function App() {
  // log(navigator)
  let [themeOne, setThemeOne] = useState(true);
  let [themeTwo, setThemeTwo] = useState(false);
  let [themeThree, setThemeThree] = useState(false);

  let [mobileMedia, setMobileMedia] = useState(false);

  let [battery, setBattery] = useState({
    batteryFull: true,
    batteryCharging: false,
    level: 0.0,
  });

  let [isOnline, setIsOnline] = useState(true);

  const handleClickThemeOne = (e) => {
    setThemeOne((t) => (t = true));
    setThemeTwo((t) => (t = false));
    setThemeThree((t) => (t = false));
  };

  const handleClickThemetwo = (e) => {
    setThemeOne((t) => (t = false));
    setThemeTwo((t) => (t = true));
    setThemeThree((t) => (t = false));
  };

  const handleClickThemeThree = (e) => {
    setThemeOne((t) => (t = false));
    setThemeTwo((t) => (t = false));
    setThemeThree((t) => (t = true));
  };

  const deviceBatteryInfo = navigator.getBattery().then((_battery) => {
    setBattery({
      batteryCharging: _battery.charging,
      batteryFull: _battery.level > minBatteryLevel,
      level: _battery.level,
    });

    _battery.onchargingchange = (c) => {
      setBattery({
        batteryCharging: c.target.charging,
        ...battery,
      });
      log(c.target.charging);
    };

    _battery.onlevelchange = (l) => {
      setBattery({
        level: l.target.level,
        batteryFull: l.target.level > minBatteryLevel,
        ...battery,
      });
      log(l.target.level);
    };
  });

  const windowEvents = on(window, {
    online() {
      setIsOnline((o) => (o = true));
    },
    offline() {
      setIsOnline((o) => (o = false));
    },
    scroll(e) {},
  });

  return (
    <>
      <header className="app-header rad-2x pos-rel">
        <Nav
          isOnline={isOnline}
          batteryFull={battery.batteryFull}
          batteryCharging={battery.batteryCharging}
        />
        <div className="intro-txt ">
          <h1 className="txt-fxlg glow-txt"> Hi, the name is Martin </h1>
        </div>
      </header>
    </>
  );
}
