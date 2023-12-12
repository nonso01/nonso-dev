import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import anime from "animejs/lib/anime.es.js";

import Text from "./Text.jsx";

export default function Error({}) {
  const error = useRouteError();
  console.warn(error);

  useEffect(() => {
    (function a() {
      anime({
        targets: ".lucide-alert-triangle path",
        direction: "alternate",
        delay(el, i) {
          return i + .8 * 1e3
        },
        strokeDashoffset: [anime.setDashoffset, 0],
        complete: a
      })
    })()

  }, [])

  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-layout fx fx-col fx-cn fx-even pos-abs pos-cn trans">
      <AlertTriangle stroke="#ff5a5a" />
        <h1 className="title txt-fmlg txt-danger"> {error.status}</h1>
        <Text c={true} className="txt-fsm txt-lenvmap" text={error.data} />
      </div>
    );
  } else return <h1 className="title txt-danger"> Error!</h1>;
}
