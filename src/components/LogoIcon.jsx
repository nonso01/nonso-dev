import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function LogoIcon(props) {
  useEffect(() => {
    anime({
      targets: ".logo-icon path",
      direction: "alternate",
      duration: 3e3,
      delay: 0.5e3,
      strokeDashoffset: [anime.setDashoffset, 0],
      loop: true,
    });
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.2 4.8 27.4 25.5"
      onClick={props.handleClick}
      className="logo-icon"
    >
      <defs>
        <linearGradient id="grad1" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#28ff98" />
          <stop offset="100%" stopColor="#ff8750" />
        </linearGradient>
      </defs>

      <path
        d="M5 5 14 15 22 5 27 5 14 21 0 5 5 5"
        stroke="url(#grad1)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m5 5M4.363 9.99 4.455 30 9.017 29.992 9.114 15.407M23.02 9.9 22.985 30 18.669 29.995 18.824 15.061"
        stroke="url(#grad1)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
