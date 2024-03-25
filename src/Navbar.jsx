import React from "react";
import ReactDOM from "react-dom";
import './App.css';

export default function Navbar(){
    return(
        <nav>
            <h4 className="Left-Item"><a href="https://www.linkedin.com/in/sonawane-riddesh-0a2315201/
" target="_blank">Riddesh Sonawane</a></h4>
            <div className="div-align">
                <h4><a className="navbar-elements-spacing">Services</a>
                 <a className="navbar-elements-spacing">Services</a>
                  <a className="navbar-elements-spacing">Services</a> 
                  <a className="navbar-elements-spacing">Services</a> </h4>     
            </div>
            <h4 className="Right-Item">Menu</h4>
        </nav>
    )
}