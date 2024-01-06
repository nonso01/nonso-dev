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
    if (visible) {
      addClass(target, enter);
      removeClass(target, "hide", leave);
    } else {
      removeClass(target, enter);
      addClass(target, leave);
    }
    on(target, {
      animationend() {
        contains(this, leave) ? addClass(this, "hide") : void 0;
      },
    });
  }, [visible]);

  return <React.Fragment>{C}</React.Fragment>;
}
