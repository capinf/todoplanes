import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { CargaAutos } from './components/CargaAutos'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path="/cargaAutos" element ={<CargaAutos/>}></Route>
      <Route path='/' element ={<Home/>}></Route>
      </Routes>
    </>

  )
}
export default App
