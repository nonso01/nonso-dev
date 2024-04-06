import React from "react";
import { X } from "lucide-react";

const BatteryInfo = React.forwardRef((props, ref) => {
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

export default BatteryInfo;
