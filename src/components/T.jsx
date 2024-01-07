import React from "react";
import { on, contains, addClass, removeClass } from "./util.js";

const log = console.log;

export default function T({
  children,
  visible,
  enter = "enter",
  leave = "leave",
}) {
  const C = React.Children.map(children, (child) => {
    const cRef = React.useRef();
    return React.cloneElement(child, { ref: cRef });
  });

  const transitionEffect = React.useEffect(() => {
    const target = C[0].ref.current;
    t({target, visible, enter, leave})
  }, [visible]);

  return <React.Fragment>{C}</React.Fragment>;
}

export function t(props = {visible: false, target: "", enter: "enter", leave: "leave"}) {
  const target = typeof props.target === "string" ? document.querySelector(props.target) : props.target

  if(props.visible && target) {
    addClass(target, props.enter)
    removeClass(target, "hide", props.leave)
  } else {
    removeClass(target, props.enter)
    addClass(target, props.leave)
  }
  on(target, {
    animationend() {
      contains(this, props.leave) ? addClass(this, "hide") : void 0
    }
  })
}
