export function computedStyle(el) {
  return window.getComputedStyle(el, null);
}

export function contains(el, token) {
  return el.classList.contains(token);
}
export function addClass(el, ...list) {
  list.forEach((c) => {
    el.classList.add(c);
  });
}
export function removeClass(el, ...list) {
  list.forEach((c) => {
    if (contains(el, c)) el.classList.remove(c);
  });
}
