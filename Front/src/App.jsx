import { NavBar } from './components/NavBar'
import './App.css'
import CarouselComponent from './components/Carrousel'
import { ListOfCars } from './components/ListOfCars'


function App() {

  return (
    <>
      <header>
      <h1>Todo Planes</h1>
      <NavBar />
      </header>

      <main>

      <CarouselComponent />
      <ListOfCars />
      

      </main>

      

      <footer>

      <h3>Documentacion + Redes sociales</h3>

      </footer>
    </>
  )
}

export default App
