import React from "react";
import Content from "./Components/Content";
import NavbarAdmin from "./Components/NavbarAdmin";
import "../src/Custom.css";
import ScrollButton from "./Components/ScrollButton";
import {UserAuthContextProvider} from "./Context/UserAuthContext";
function App() {
  return (
    <div id={"wrapper"}>
      <UserAuthContextProvider>

      <NavbarAdmin/>
        <Content/>
        <ScrollButton/>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
