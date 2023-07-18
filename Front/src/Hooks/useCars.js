import withResults from '../datatest/withresults.json'
import withoutresults from '../datatest/withoutresults.json'
import { useState } from 'react'
import * as API from '../servicios/servicios'

export function useCars ({ search }) {
    const [responseCars, setResponseCars] = useState([])
    
    const cars = responseCars.Search

    const mappedCars = cars?.map(car =>({
        id: car.idFormulario,
        title: car.nombrePlan,
        precio: car.precio,
        cuotas: car.cantidadCuotas,
        adjudicado: car.adjudicado,
        anio: car.anioInicio,
        localidad: car.localidad,
        telefono: car.telefono,
        img: car.imgPath
    }))

    const getCars = async () => {
        
        if (search) { 
            //HACER ACÄ EL LLAMADO AL ENDPOINT -> SERVICIOS.JS -> BACKEND -> GET CONSULTA
            // setResponseCars(getAutosAPI())
            const planes = await API.getPlanesAPI()
            setResponseCars(planes)

        }else{
            setResponseCars(withoutresults)
        }
    }

    return {cars: mappedCars, getCars }
}