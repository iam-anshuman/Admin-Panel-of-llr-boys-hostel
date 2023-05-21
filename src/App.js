import React from "react";
import Navbar_admin from "./Components/NavbarAdmin";
import Content from "./Components/Content";
import NavbarAdmin from "./Components/NavbarAdmin";
import "../src/Custom.css";
import ScrollButton from "./Components/ScrollButton";
function App() {
  return (
    <div id={"wrapper"}>
      <NavbarAdmin/>
        <Content/>
        <ScrollButton/>
    </div>
  );
}

export default App;
