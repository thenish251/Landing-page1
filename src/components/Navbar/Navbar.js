import React from "react";
import "./Navbar.css";
import logo from "../asserts/logo.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
    <img src={logo} alt ="logo" className="logo"/>
    </nav>
    );
    }
