import {} from "lucide-react";
import Toggle from "./Toggle.jsx";

export default function Setting(props) {
  return (
    <div className={props.isMobile ? "setting" : "setting pos-abs rad enter"}>
      <div className="fx fx-around">
        <span className={props.isLight ? "txt-lgreen" : "txt-lenvmap"}>
          {" "}
          Light{" "}
        </span>
        <Toggle active={props.isLight} handleClick={props.handleTheme} />
      </div>
      <div className="fx fx-around">
        <span className={props.isDark ? "txt-lgreen" : "txt-lenvmap"}>
          {" "}
          Dark
        </span>
        <Toggle active={props.isDark} handleClick={props.handleTheme} />
      </div>
    </div>
  );
}
