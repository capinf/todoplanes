import { useState, useEffect } from 'react'
import '../Css/GridAutos.css'
import * as API from '../servicios/servicios'

export function PlanPremium () {

    const [ planesPremium, setPlanesPremium ] = useState([])

    useEffect(() =>{
        API.getPlanesAPIpremium().then(setPlanesPremium)
    }, [])

    return (
        <>
        <div className='Card'>
        <div className='carta-autos'>
        <ul className='gridAutos'>
        {
        planesPremium.map(plan =>(

            <li className='card-list' key={plan.id}>
            <img className='card-image' src={plan.img} alt="" />
            <h1 className='title'>{plan.nombrePlan}</h1>
            <div className="card-details">
            <p className='info'>Precio: {plan.precio}</p>
            <p className='info'>Cuotas pagadas: {plan.cantidadCuotas}</p>
            <p className='info'>¿Adjudicado?: {plan.adjudicado}</p>
            <p className='info'>Localidad: {plan.localidad}</p>
            <p className='info'>Año de Inicio: {plan.anioInicio}</p>
            <p className='info'>{plan.telefono}</p>
            <button className='buttoncito'><img src="/img/buttoncito.png" alt="boton de contacto" width="100px" height="100px" /></button>
            <button className='whatsapplogo'><img src="/img/whatsappfree.png" alt="" width="100px" height="100px" /></button>
            </div>
            </li>
        ))
         }
        </ul>
      </div>
        </div>
        </>
    )
}