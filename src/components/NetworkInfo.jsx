import React from "react";
import { X } from "lucide-react";

const NetworkInfo = React.forwardRef((props, ref) => {
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

export default NetworkInfo;
