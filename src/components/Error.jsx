import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import Text from "./Text.jsx";

export default function Error({}) {
  const error = useRouteError();
  console.warn(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-layout fx fx-col fx-cn fx-even pos-abs pos-cn rad-2x trans">
        <h1 className="title txt-fmlg txt-danger"> {error.status}</h1>
        <Text p={true} className="txt-danger" text={error.statusText} />
        <Text c={true} className="txt-fsm txt-lenvmap" text={error.data} />
      </div>
    );
  } else return <h1 className="txt"> An Error occured! </h1>;
}
