import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function LogoIcon(props) {
  useEffect(() => {
    anime({
      targets: ".logo-icon.a path",
      // direction: "alternate",
      duration: 3e3,
      delay: 0.5e3,
      scale: [{ value: 1 }, { value: 0.3 }, { value: 1.2 }, { value: 1 }],
      strokeDashoffset: [anime.setDashoffset, 0],
      // loop: true,
    });
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.2 4.8 27.4 25.5"
      onClick={props.handleClick}
      className={props.animate ? "logo-icon a" : "logo-icon"}
    >
      <defs>
        <linearGradient id="grad1" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="var(--app-main-low-envmap)" />
          <stop offset="100%" stopColor="var(--app-silver)" />
        </linearGradient>
      </defs>

      <path
        d="M5 5 14 15 22 5 27 5 14 21 0 5 5 5"
        stroke="url(#grad1)"
        strokeWidth="1"
        fill={props.fill ? "url(#grad1)" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m5 5M4.363 9.99 4.455 30 9.017 29.992 9.114 15.407M23.02 9.9 22.985 30 18.669 29.995 18.824 15.061"
        stroke="url(#grad1)"
        strokeWidth="1"
        fill={props.fill ? "url(#grad1)" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
