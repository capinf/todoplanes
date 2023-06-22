import { NavBar } from './components/NavBar'
import './App.css'
import CarouselComponent from './components/Carrousel'
import {Cars} from './components/Cars'
import responseCars from './datatest/withresults.json'
import noResults from './datatest/withoutresults.json'


function App() {
  const cars = responseCars.Search
  console.log(cars)

  return (
    <>
    <div className='page'>
      <header>
        <h1>Todo Planes</h1>
        <NavBar />
        <div><CarouselComponent /></div>
      </header>

      <main>
        <section><Cars cars={cars} /></section>

      </main>

      <footer>

        <h3>Documentacion + Redes sociales</h3>
        <img src="" alt="" />
      </footer>
      </div>
    </>
  )
}

export default App
