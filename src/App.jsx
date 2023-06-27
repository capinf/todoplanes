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


function App() {
  return (
    <>



        <Menu/>
        <Routes>
        <Route path='/' element = {<Principal/>}></Route>
        <Route path='/FormAuto' element={<FormAuto/>}></Route>
        

        </Routes>


    </>
  )
}

export default App
