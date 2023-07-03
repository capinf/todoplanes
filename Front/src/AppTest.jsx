import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CargaAutos } from './components/CargaAutos'
import { NavBarTest } from './components/NavBarTest'
import { HomeTest } from './components/HomeTest'
import { Login } from './components/Login'
import { CargaPlan } from './components/QuieroVenderMiPlan'
import { Adjudicados } from './components/Adjudicados'

function AppTest() {

  return (
    <>
      <NavBarTest/>
      <Routes>
      <Route path="/cargaAutos" element ={<CargaAutos/>}></Route>
      <Route path='/' element ={<HomeTest/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
      <Route path='/cargaPlan' element ={<CargaPlan/>}></Route>
      <Route path='/adjudicados' element ={<Adjudicados/>}></Route>
      </Routes>
    </>

  )
}
export default AppTest
