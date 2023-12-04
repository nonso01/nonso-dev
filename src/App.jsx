import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Text from "./components/Text.jsx";
import Nav from "./components/Nav.jsx";
//import { rgbToHex } from "./components/util.js";

export default function App() {

  return (
    <>
      <Text text={"Hello nonso-dev"} p={true} />
      <Nav />
    </>
  );
}
