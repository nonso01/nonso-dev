import Text from "./components/Text.jsx";

import { rgbToHex } from "./components/util.js";

// console.log(rgbToHex("rgb(104, 112, 125)"));

export default function App() {
  return (
    <>
      <Text text={"Hello nonso-dev"} p={true} />
    </>
  );
}
