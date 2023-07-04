import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import './formcss.css'

export function NavBar () {
    return (
        <>
    <Navbar className="barra" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to= {'/'} >Inicio</Link>
          <Nav.Link  href="#">Clientes</Nav.Link>
          <Link to = {'/FormAuto'}>Autos</Link>
          <Link to = {'/Planes'}>Planes</Link>
         

        </Nav>
      </Navbar.Collapse>
    </Navbar>
        <div className="logo">
        <img src="/img/logo.png" width="120px" height="120px" alt="logo" />
        </div>
        
        </>
    )
}