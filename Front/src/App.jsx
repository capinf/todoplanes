import { NavBar } from './components/NavBar'
import './App.css'
import CarouselComponent from './components/Carrousel'
import responseCars from './datatest/withresults.json'
import noResults from './datatest/withoutresults.json'
import Card from './components/Card'
import {FormAuto} from './components/FormAuto.jsx'
import { Link,Route, Routes } from 'react-router-dom'
import { Menu } from './components/Home/BarraNavegacion'
import Principal from './components/Home/PantallaPrincipal'
import Login from './components/Login/Login.jsx'
import Planes from './components/Planes'
import { Usuarios } from './endpoints/Usuario'

function App() {
  return (
    <>



        <Menu/>
        <Routes>
        <Route path='/' element = {<Principal/>}></Route>
        <Route path='/FormAuto' element={<FormAuto/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Planes' element={<Planes/>}></Route>
        <Route path='/usuario' element={<Usuarios/>}></Route>

        </Routes>


    </>
  )
}

export default App
