import HomeComponent from "./pages/Home/HomeComponent";
import CreateComponent from "./pages/create/CreateComponent";
import AboutComponent from "./pages/About/AboutComponent";
import NavBar from "./components/Navigation/NavBar";
import React from 'react'
import {Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/about" element={<AboutComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;