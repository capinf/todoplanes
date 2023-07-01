import withResults from '../datatest/withresults.json'
import withoutresults from '../datatest/withoutresults.json'
import { useState } from 'react'

export function useCars ({ search }) {
    const [responseCars, setResponseCars] = useState([])
    
    const cars = responseCars.Search

    const mappedCars = cars?.map(car =>({
        id: car.carId,
        title: car.title,
        año: car.año,
        kilometraje: car.Kilometraje,
        descripcion: car.descripcion,
        img: car.img
    }))

    const getCars = () => {
        if (search) {
            setResponseCars(withResults)
        }else{
            setResponseCars(withoutresults)
        }
    }

    return {cars: mappedCars, getCars }
}