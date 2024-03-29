import { X } from "lucide-react";
import React from "react";
import Toggle from "./Toggle.jsx";

const Setting = React.forwardRef((props, ref) => {
  return (
    <div className="setting pos-abs rad hide" ref={ref}>
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

      <X
        stroke="#68707d"
        className="pos-abs rad-round"
        onClick={props.handleShowSetting}
      />
    </div>
  );
});

export default Setting;
