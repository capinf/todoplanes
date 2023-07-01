import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSearch } from "../Hooks/useSearch";
import { useCars } from '../Hooks/useCars'

export function NavBar () {
  const { search, updateSearch, error} = useSearch()
  const { cars, getCars } = useCars({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({search})
    getCars()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)

}

    return (
        <>
    <Navbar className="barra" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href='/'>Inicio</Nav.Link>
          <Nav.Link href="#">Clientes</Nav.Link>
          <Nav.Link href="/cargaAutos">Autos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
            <div className="logo">
            <img src="/img/logo.png" width="120px" height="120px" alt="logo" />
            </div>
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>

            <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} 
            onChange={handleChange} 
            className="form-control ml-sm-2" 
            value={search} type="search" 
            placeholder="Ford..." 
            aria-label="Search"/>
            
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
            {error && <p style={{ color : "red", fontSize : "2 px"}}>{error}</p>}
            <a className="login" href="#"><img src="/img/iniciarsesion1.png" width="50px" height="50px" alt="user" /></a>
    </Navbar>

        </>
    )
}