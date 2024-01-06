import { forwardRef } from "react";

const Spinner = forwardRef((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.5 -1.3 4 4" ref={ref}>
      <path
        d="m1 0a1 1 0 003 0"
        stroke="#FF0000"
        stroke-width=".2"
        fill="none"
        stroke-linecap="round"
      />
    </svg>
  );
});
export default Spinner;
