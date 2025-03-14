import React from "react";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button, IconButton, TextField } from '@mui/material';


function Navbar() {
  let navigate = useNavigate();
  const isAuthenticated = () => {
    if(localStorage.getItem("token")) {
        return true;
    } 
    return false;
}

  

  return (
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:'#fff'}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src='Media/images/logo.svg' alt='Logo' style={{width:"20%"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0 fs-7">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/support">
                  Support
                </Link>
              </li>  
              <li className="nav-item ms-4 mt-1">
              {isAuthenticated() && (
              <Button
                  onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("username");
                      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                      navigate("/signup");
                  }}
              >
                  Logout
              </Button>
               )}

                </li>
                     
              
            </ul> 
              
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
