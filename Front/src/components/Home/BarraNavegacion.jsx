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
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link  href="#">Clientes</Nav.Link>
          <Nav.Link href = '/FormAuto'>Autos</Nav.Link>
          <Nav.Link href="#">Planes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        <div className="logo">
        <img src="/img/logo.png" width="120px" height="120px" alt="logo" />
        </div>
        
        </>
    )
}