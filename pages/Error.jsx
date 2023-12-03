import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import Text from "../src/components/Text.jsx";

export default function Error({}) {
  const error = useRouteError();
  console.warn(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="error-layout">
        <h1 className="title"> {error.status}</h1>
        <Text p={true} text={error.statusText} />
        <Text c={true} text={error.data} />
      </div>
    );
  } else return <h1 className="txt"> An Error occured! </h1>;
}
