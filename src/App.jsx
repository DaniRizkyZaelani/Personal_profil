/* eslint-disable no-unused-vars */
import React from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Mainnav";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Education />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
