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
    <body>
      <div className='gridAutos'>
        <ul>
        {
        Cars.map(car =>(

        <li key={car.carId}>
        <img src={car.img} alt="" width="150px" height="150px" />
        <h1 className='title'>{car.title}</h1>
        <p className='info'>{car.Kilometraje}</p>
        <p className='info'>{car.Kilometraje}</p>
        <p className='info'>{car.descripcion}</p>
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