import { useState, useEffect } from "react";
// import anime from "animejs/lib/anime.es.js";

import Nav from "./components/Nav.jsx";
import H3d from "./components/Header3d.jsx";
import T from "./components/T.jsx";
import { on, contains, addClass } from "./components/util.js";

const log = console.log;
const minBatteryLevel = 16 / 100;

export default function App() {
  // log(navigator)
  let [theme, setTheme] = useState({
    light: true,
    dark: false,
  });

  let [scrolling, setScrolling] = useState({
    x: 0.0,
    y: 0.0,
  });

  let [isMobile, setIsMobile] = useState(false);

  let [battery, setBattery] = useState({
    batteryFull: true,
    batteryCharging: false,
    level: 0.0,
  });

  let [showBattery, setShowBattery] = useState(false);

  let [showNetwork, setShowNetwork] = useState(false);

  let [showSetting, setShowSetting] = useState(false);

  let [network, setNetwork] = useState({
    effectiveType: "",
    type: "",
  });

  let [isOnline, setIsOnline] = useState(true);

  const handleTheme = (e) => {
    log("working");
    setTheme({
      light: !theme.light,
      dark: !theme.dark,
    });
  };

  const mediaQueryEffect = useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 575.98px)");
    setIsMobile((m) => (m = mediaQueryList.matches));
    mediaQueryList.onchange = (m) => {
      setIsMobile((_m) => (_m = m.matches));
      // log({matches: m.matches, width: window.innerWidth})
    };
  }, []);

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
    setShowNetwork(false);
    setShowSetting(false);
  };

  const handleShowNetwork = (e) => {
    setShowNetwork((n) => !n);
    setShowBattery(false);
    setShowSetting(false);
  };

  const handleShowSetting = () => {
    setShowSetting((s) => !s);
    setShowBattery(false);
    setShowNetwork(false);
  };

  const windowEvents = useEffect(() => {
    on(window, {
      online() {
        setIsOnline((o) => (o = true));
      },
      offline() {
        setIsOnline((o) => (o = false));
      },
      animationend(e) {
        // contains(e.target, "leave") ? addClass(e.target, "hide") : void 0;
      },
      scroll() {
        // log(this.scrollY)
        setScrolling({
          y: this.scrollY,
          x: this.scrollX,
        });
      },
    });
  }, []);

  return (
    <>
      <header className="app-header rad-2x pos-rel">
        <Nav
          isMobile={isMobile}
          isOnline={isOnline}
          batteryFull={battery.batteryFull}
          batteryCharging={battery.batteryCharging}
          batteryLevel={Math.round(battery.level * 100)}
          handleShowBattery={handleShowBattery}
          handleShowNetwork={handleShowNetwork}
          showBattery={showBattery}
          showNetwork={showNetwork}
          networkEffectiveType={network.effectiveType}
          networkType={network.type}
          showSetting={showSetting}
          handleShowSetting={handleShowSetting}
          isLight={theme.light}
          isDark={theme.dark}
          handleTheme={handleTheme}
        />
        <div className="intro-txt ">
          <h1 className="txt-fxlg glow-txt">A Dev Crafted Just For You.</h1>
        </div>
        {/*<H3d />*/}
      </header>
    </>
  );
}
