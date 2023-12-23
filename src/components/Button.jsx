import { useState } from "react";

export default function Button({ onClickFn, className = "" }) {
  let [c, setC] = useState(0);

  function handleClick() {
    setC((x) => (x += 1));
  }

  return (
    <>
      <button
        className={`${className} btn`}
        onClick={onClickFn ? onClickFn : handleClick}
      >
        count is {c}
      </button>
    </>
  );
}
