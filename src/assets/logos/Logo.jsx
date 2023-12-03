// stroke: #212121
import anime from "animejs/lib/anime.es.js";

const log = console.log;

export default function MyLogo() {
  // const completed = ref(false);

  /* defineExpose({
  completed,
});
*/

  const tl = anime.timeline({
    autoplay: true,
    direction: "alternate",
    easing: "easeInOutSine",
    complete() {
      completed.value = true;
      // log(`completed in ${tl.duration}`);
    },
  });

  anime.set("#mylogo .rect-green, #mylogo .rect-red", { scale: 0 });
  anime.set("#mylogo .rect-coral", { translateY: -60 });
  anime.set("#mylogo circle, #mylogo .lines, .rect-yellow, .rect-coral ", {
    opacity: 0,
  });
  anime.set("#mylogo .circle-coral", { translateX: -10 });

  tl.add({
    targets: "#mylogo .rect-coral",
    duration: 0.7e3,
    opacity: {
      value: 1,
      duration: 50,
    },
    keyframes: [
      {
        easing: "easeInQuad",
        duration: 600,
        scaleY: 1.3,
        scaleX: 1,
        fillOpacity: 0,
      },
      {
        easing: "easeInExpo",
        duration: 1.1e3,
        translateY: 8,
        scaleY: 0.2,
        scaleX: 1.5,
        fillOpacity: 0.5,
      },
      {
        easing: "easeInQuad",
        duration: 200,
        translateY: 0,
        scaleY: 1,
        scaleX: 1,
        fillOpacity: 1,
      },
    ],
  })
    .add({
      targets: "#mylogo .rect-red, #mylogo .rect-green",
      delay(el, i) {
        return (0.5 + i) * 0.7e3;
      },
      keyframes: [
        { easing: "easeInQuad", duration: 250, scale: 0.1 },
        { easing: "easeInQuad", duration: 250, scale: 1.5 },
        { easing: "easeOutQuad", duration: 200, scale: 1 },
      ],
    })
    .add({
      targets: "#mylogo .rect-yellow",
      duration: 0.7e3,
      keyframes: [
        {
          easing: "easeInQuad",
          translateX: -8,
          scale: 0.9,
          duration: 300,
        },
        { easing: "easeOutQuad", opacity: 0.7, translateX: 2.5, duration: 200 },
        {
          easing: "easeOutQuad",
          opacity: 1,
          translateX: 0,
          scale: 1,
          duration: 300,
        },
      ],
    })
    .add({
      targets: "#mylogo .circle-yellow",
      keyframes: [
        {
          easing: "easeOutQuad",
          duration: 100,
          opacity: 0.35,
          scale: 0.8,
          translateX: 0,
          translateY: 2,
        },
        {
          easing: "easeInQuad",
          duration: 100,
          opacity: 0.7,
          scale: 0.9,
          translateX: 3,
          translateY: 6,
        },
        {
          easing: "easeInQuad",
          duration: 100,
          opacity: 0.9,
          scaleY: 1.3,
          translateX: 6,
          translateY: 15,
        },
        {
          easing: "easeInQuad",
          duration: 100,
          opacity: 1,
          scaleY: 0.9,
          translateY: 30,
        },
        {
          easing: "easeInExpo",
          duration: 100,
          scaleY: 1.3,
          translateX: 8,
          translateY: -10,
        },
        {
          easing: "easeInQuad",
          duration: 100,
          scaleX: 1.2,
          translateX: -1,
          translateY: -5,
        },
        {
          easing: "easeInQuad",
          duration: 100,
          translateY: 0,
          translateX: 0,
          scaleY: 1,
          scaleX: 1,
        },
      ],
    })
    .add({
      targets: "#mylogo .circle-coral",
      keyframes: [
        {
          easing: "easeInQuad",
          duration: 200,
          opacity: 0.5,
          scaleX: 0.9,
          scaleY: 1.3,
          translateX: 16,
          translateY: 4,
        },
        {
          easing: "easeInQuad",
          duration: 200,
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
          scale: 1,
          translateY: 0,
          translateX: 0,
        },
      ],
    })
    .add({
      targets: "#mylogo .circle-green",
      easing: "easeInExpo",
      duration: 1100,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      translateX: 0,
      strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
      targets: "#mylogo .lines", // 0, 1, 2
      begin() {
        anime.set("#mylogo .lines", { opacity: 1 });
        anime.set("#mylogo .circle-green", { fillOpacity: 1 });
      },
      delay(el, i) {
        return (0.5 + i) * 1.1e3;
      },
      duration: 0.7e3,
      strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
      targets: "#mylogo svg *",
      easing: "easeInExpo",
      delay(el, i) {
        return (0.5 + i) * 0.4e3;
      },
      fillOpacity: 0,
    })
    .add({
      targets: "#mylogo svg *",
      easing: "easeInExpo",
      duration: 0.7e3,
      delay(el, i) {
        return (i + 0.5) * 0.4e3;
      },
      translateX(el, i) {
        return (i + 0.5) * 2.5 * (Math.random() - 0.5);
      },
      translateY(el, i) {
        return (i + 0.5) * 2 * (Math.random() - 0.5);
      },
      rotate(el, i) {
        return (i + 0.5) * (Math.random() - 0.5) * 90;
      },
      scaleX: 0.9,
      scaleY: 0.9,
    });

  return (
    <div id="mylogo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 48 45"
      >
        <path
          d="m6.7 39.487-.07-33.415 4.936 3.287-.07 25.276z"
          class="rect-coral"
          style="
          fill: #ff8750;
          fill-opacity: 0;
          stroke: #ff8750;
          stroke-linecap: round;
          stroke-width: 0.5;
          scale: 1 1;
        "
        />
        <path
          d="m44.1 39.487.07-33.415-4.936 3.287.07 25.276z"
          class="rect-yellow"
          style="
          fill: #ffbe40;
          stroke: #ffbe40;
          stroke-linecap: round;
          stroke-width: 0.5;
        "
        />
        <path
          d="m11.841 9.4.082 5.561 13.162 3.552.162-5.14z"
          class="rect-red"
          style="
          fill: #ff5a5a;
          stroke: #ff5a5a;
          stroke-linecap: round;
          stroke-width: 0.5;
        "
        />
        <path
          d="m38.9 9.4-.081 5.546-13.163 3.542-.163-5.127z"
          class="rect-green"
          style="
          fill: #28ff98;
          stroke: #28ff97;
          stroke-linecap: round;
          stroke-width: 0.5;
        "
        />
        <circle
          cx="10"
          cy="13.9"
          r="1.9"
          class="circle-yellow"
          style="
          fill: #ffbe40;
          stroke: #ffbe40;
          stroke-linecap: round;
          stroke-width: 0.5;
        "
        />
        <circle
          cx="35"
          cy="30"
          r="1.9"
          class="circle-coral"
          style="
          fill: #ff8750;
          stroke: #ff8750;
          stroke-linecap: round;
          stroke-width: 0.5;
        "
        />
        <path
          d="M6.542 12.3c-.551.126-1.102.252-1.37.48-.268.229-.252.56.026.895.278.335.84.688 2.076 1.381 1.236.693 3.158 1.733 4.292 2.386 1.134.654 1.48.921 1.691 1.262.212.34.293.777.002 1.155-.292.378-.953.71-1.292.875-.338.165-.354.165-.37.165"
          class="lines line-1"
          style="
          fill: none;
          stroke: #ffbe40;
          stroke-width: 0.4;
          stroke-linecap: round;
        "
        />
        <path
          d="M6.542 21.5c-.315.157-.63.315-.842.449-.213.133-.323.244-.364.424a.894.894 0 0 0 .143.67c.15.205.417.347 1.512.67 1.094.322 3.016.826 4.142 1.134 1.126.307 1.457.417 1.724.559.268.141.473.315.607.44.133.127.196.205.206.347a.964.964 0 0 1-.194.587c-.152.209-.43.42-.784.634-.355.212-.795.433-1.236.653"
          class="lines line-2"
          style="
          fill: none;
          stroke: #ffbe40;
          stroke-width: 0.4;
          stroke-linecap: round;
        "
        />
        <path
          d="M6.542 29.3c-.551.126-1.102.252-1.37.48-.268.229-.252.56.026.895.278.335.84.688 2.076 1.381 1.236.693 3.158 1.733 4.292 2.386 1.134
      .654 1.48.921 1.691 1.262.212.34.293.777.002 1.155-.292.378-.953.71-1.292.875-.338.165-.354.165-.37.165"
          class="lines line-3"
          style="
          fill: none;
          stroke: #ffbe40;
          stroke-linecap: round;
          stroke-width: 0.4;
        "
        />
        <circle
          cx="5"
          cy="27.4"
          r="1.9"
          class="circle-green"
          style="
          fill: #28ff98;
          fill-opacity: 0;
          stroke: #28ff98;
          stroke-linecap: round;
          stroke-width: 0.5;
        "
        />
      </svg>
    </div>
  );
}
