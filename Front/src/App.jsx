import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CargaAutos } from './components/CargaAutos'
import { NavBarTest } from './components/NavBarTest'
import { HomeTest } from './components/HomeTest'
import { Login } from './components/Login'
import { CargaPlan } from './components/QuieroVenderMiPlan'
import { Adjudicados } from './components/Adjudicados'
import  Planes  from './components/Planes'
import { Usuarios } from './components/Usuario'
import { useState, useEffect } from 'react'

function App() {

  const [sesion, setSesion] = useState('');
  // const [user, setUser] = useState([])
        useEffect(()=>{

          const sesionLogeada = JSON.parse(localStorage.getItem('token'))
          if(sesionLogeada){
            setSesion(sesionLogeada)
            console.log('sesion logeada', sesionLogeada)
          }  
        },[])

        // useEffect(()=>{
        //   API.getUsuario().then(setUser)
        //   console.log(user.map((users)))
        // },[])

        
  return (
    <>
        {/* {user.rol === "admin" ? (
          <>
          <div><NavBarTestMain/></div>
          </>
        ) : !sesion ? (
          <div><NavBar/></div>
        ) : (
          <div><NavBarTest/></div>
        )} */}
            
      <NavBarTest/>
      <Routes>
      <Route path="/cargaAutos" element ={<CargaAutos/>}></Route>
      <Route path='/' element ={<HomeTest/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
      <Route path='/cargaPlan' element ={<CargaPlan/>}></Route>
      <Route path='/adjudicados' element ={<Adjudicados/>}></Route>
      <Route path='/planes' element ={<Planes />}></Route>
      <Route path='/usuario' element={<Usuarios/>}></Route>
      </Routes>
    </>

  )
}
export default App
