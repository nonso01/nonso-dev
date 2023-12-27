// nonso-dev v3.0
// a lib of useful functions.
//
export function rgbToHex(str /* string or [] */) {
  const param = typeof str === "string" ? str : Array.isArray(str) ? str : null;

  const hexLetters = Object.freeze({
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  });

  let hex = "#",
    arr = param,
    len,
    calc1,
    calc2;

  if (typeof param === "string") arr = arr.split(/\D/).filter(Number);

  /* 
    if it's an array Or converted string
    Alpha values = 0 - 100 ( 0 - 1)
    */
  arr = arr?.map((num, i) => {
    if (i === 3)
      num > 100 ? (num = 100) : (num = Math.floor((num / 100) * 255));
    if (i > 3) throw new Error("the f** man ?");

    return Number(num);
  });

  len = arr?.length;

  arr?.forEach((num, i) => {
    calc1 = Math.floor(num / 16);
    calc2 = ((num % 16) / 16) * 16;

    for (const [k, v] of Object.entries(hexLetters)) {
      if (calc1 === v) calc1 = k;
      if (calc2 === v) calc2 = k;
    }
    hex += calc1 + "" + calc2;
  });

  return hex;
}

export function on(element, ev) {
  let node =
    typeof element === "string" ? document.querySelectorAll(element) : element;
  if (node instanceof NodeList) {
    node.forEach((n) => {
      for (let method in ev) {
        n.addEventListener(method, ev[method].bind(n));
      }
    });
  } else {
    for (let method in ev) node.addEventListener(method, ev[method].bind(node));
  }
  return element && event ? true : false;
}

export class Transition {
  constructor(target, el) {
    try {
      this.el = typeof el === "string" ? document.querySelector(el) : el;
      this.target =
        typeof target === "string" ? document.querySelector(target) : target;
    } catch (e) {}
  }

  on() {
    try {
      this.el.onclick = () => {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            this.target.remove();
          });
        } else console.warn("not supported");
      };
    } catch (e) {
      console.warn(e.message);
    }
  }
}
