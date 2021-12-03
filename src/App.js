import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";


import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App(props) {
  useEffect(() => {
    props.fetchList();
  },[]);

  return (
   
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;