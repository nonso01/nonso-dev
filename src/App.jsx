import { useState, useEffect } from "react";
// import anime from "animejs/lib/anime.es.js";

import Text from "./components/Text.jsx";
import Nav from "./components/Nav.jsx";
// import Button from "./components/Button.jsx";
import H3d from "./components/Header3d.jsx";
import { on } from "./components/util.js";

const log = console.log;
const minBatteryLevel = 16 / 100;

export default function App() {
  // log(navigator)
  let [theme, setTheme] = useState({
    light: true,
    dark: false,
  });

  let [isMobile, setIsMobile] = useState(false);

  let [battery, setBattery] = useState({
    batteryFull: true,
    batteryCharging: false,
    level: 0.0,
  });

  let [showBattery, setShowBattery] = useState(false);

  let [showNetwork, setShowNetwork] = useState(false);

  let [network, setNetwork] = useState({
    effectiveType: "",
    type: "",
  });

  let [isOnline, setIsOnline] = useState(true);

  const handleClickThemeLight = (e) => {
    setTheme({
      light: true,
      dark: false,
    });
  };

  const handleClickThemeDark = (e) => {
    setTheme({
      dark: true,
      light: false,
    });
  };

  const userBatteryInfo = useEffect(() => {
    navigator.getBattery().then((b /* BatteryManager */) => {
      setBattery({
        batteryCharging: b.charging,
        batteryFull: b.level > minBatteryLevel,
        level: b.level,
      });

      b.onchargingchange = (c) => {
        setBattery({
          batteryCharging: c.target.charging,
          level: c.target.level,
          batteryFull: c.target.level > minBatteryLevel,
        });
      };

      b.onlevelchange = (l) => {
        setBattery({
          batteryCharging: l.target.charging,
          level: l.target.level,
          batteryFull: l.target.level > minBatteryLevel,
        });
      };
    });
  }, []);

  const userNetworkInfo = useEffect(() => {
    const n = navigator;
    setNetwork({
      effectiveType: n.connection.effectiveType?.toUpperCase(),
      type: n.connection.type,
    });

    n.connection.onchange = (con) => {
      setNetwork({
        effectiveType: n.connection.effectiveType?.toUpperCase(),
        type: n.connection.type,
      });
    };
  }, []);

  const handleShowBattery = (e) => {
    setShowBattery((b) => !b);
  };

  const handleShowNetwork = (e) => {
    setShowNetwork((n) => !n);
  };

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
          batteryLevel={battery.level * 100}
          handleShowBattery={handleShowBattery}
          handleShowNetwork={handleShowNetwork}
          showBattery={showBattery}
          showNetwork={showNetwork}
          networkEffectiveType={network.effectiveType}
          networkType={network.type}
        />
        <div className="intro-txt ">
          <h1 className="txt-fxlg glow-txt"> Hi, the name is Martin </h1>
        </div>
      </header>
    </>
  );
}
