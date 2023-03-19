import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./singup";
import Login from "./login";
import Navbar from "./navbar";
import Footer from "./footer";
import Slider from "./slider";
import Products from "./products";
import Addproducts from "./addproducts";
import Profile from "./profile";
import Detail from "./detail";
import ManageProducts from "./manageProducts";
function App() {

  // for save login client
  let login = localStorage.getItem("login");

  const loginValid = () => {
    localStorage.setItem("login", "true");
  };
  


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={(<><Navbar login={login}/><Slider/><Products/><Footer/></>)} />
          <Route exact path="/profile" element={(<><Navbar login={login}/><Slider/><Profile/><Footer/></>)} />
          <Route exact path="/manage" element={(<><Navbar login={login}/><Slider/><ManageProducts/><Footer/></>)} />
          <Route exact path="/detail" element={(<><Navbar login={login}/><Slider/><Detail/><Footer/></>)} />
          <Route exact path="/addproducts" element={(<><Navbar login={login}/><Slider/><Addproducts/><Footer/></>)} />
          <Route exact path="/signup" element={(<><Navbar login={login}/><Slider/><Signup/><Footer/></>)} />
          <Route exact path="/login" element={(<><Navbar login={login}/><Slider/><Login loginValid={loginValid}/><Footer/></>)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
