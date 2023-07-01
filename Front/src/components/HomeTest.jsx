import { Route, Routes } from 'react-router-dom'
import  CarouselComponent  from './Carrousel'
import withresults from '../datatest/withresults.json'
import '../Css/GridAutos.css'
import '../Css/searchBar.css'
import { Cars } from './Cars'
import { useCars } from '../Hooks/useCars'
import React, { useEffect, useState, useRef } from "react";
import { useSearch } from "../Hooks/useSearch";



export function HomeTest() {

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
    <header>
        
        <CarouselComponent/>
        <div className='contenedorbusqueda'>
    <form className="busqueda" onSubmit={handleSubmit}>
            <input style={{border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'}}
            onChange={handleChange} className="searchInput"
            value={search} type="search" placeholder="Ford..." aria-label="Search"/>
            <button className="buttonSearch" type="submit">Buscar</button>
            </form>
            {error && <p className='error' style={{ color : "red"}}>{error}</p>}
    </div>
    </header>
    <main>
      <Cars cars={cars} />
    </main>
    </>
    )
}