import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export function Menu () {
    return (
        <>
   <Navbar className="barra" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{color:"white"}} href='/'>Inicio</Nav.Link>
          <Nav.Link style={{color:"aquamarine"}} href="/Planes">Planes Avanzados</Nav.Link>
          <Nav.Link style={{color:"white"}} href="/adjudicados">Adjudicados</Nav.Link>
          <Nav.Link style={{color:"aquamarine"}} href="">¡Quiero vender mi plan!</Nav.Link>
          <Nav.Link style={{color:"white"}} href="/FormAuto">¡Subí tu auto!</Nav.Link>
        </Nav>
      </Navbar.Collapse>
            <div className="logo">
            <img src="/img/logo.png" width="120px" height="120px" alt="logo" />
            </div>
            <Nav.Link className="login" href="/login"><img src="/img/iniciarsesion1.png" width="60px" height="60px" alt="user" /></Nav.Link>
    </Navbar>

        
        </>
    )
}