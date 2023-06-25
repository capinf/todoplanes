import { Route, Routes } from 'react-router-dom'
import  CarouselComponent  from './Carrousel'
import withresults from '../datatest/withresults.json'
import '../Css/GridAutos.css'

export function Home() {
  const Cars = withresults.Search
  const hasCars = Cars.length > 0

  return (
    <>
    <header><CarouselComponent/></header>
    <body className='Card'>
      <div className='carta-autos'>
        <ul className='gridAutos'>
        {
        Cars.map(car =>(

        <li className='card-list' key={car.carId}>
        <img className='card-image' src={car.img} alt="" />
        <h1 className='title'>{car.title}</h1>
        <div className="card-details">
        <p className='info'>Kilometraje: {car.Kilometraje}</p>
        <p className='info'>Modelo: {car.año}</p>
        <p className='info'>{car.descripcion}</p>
        <button className='buttoncito'><img src="/img/buttoncito2.png" alt="boton de contacto" width="100px" height="100px" /></button>
        <button className='whatsapplogo'><img src="/img/whatsappfree.png" alt="" width="100px" height="100px" /></button>
        </div>
        </li>
        ))
         }
        </ul>
      </div>
    </body>
      <div className="App">
      </div>
    </>
    )
}