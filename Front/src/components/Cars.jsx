function ListOfCars ({cars}) {

    return (
        <ul className="cars">
            {
              cars.map(car =>(
                <li className="car" key={car.carId}>
                    <h3>{car.title}</h3>
                    <p>{car.año}</p>
                    <p>{car.Kilometraje}</p>
                    <img src={car.img} alt={car.title} style={{ width: '100%', height: '120px' }} />
                </li>
              ))  
            }
        </ul>
    )
}

function NoCarResponse () {
    return (
        <p>No se encontraron datos para la busqueda</p>
    )
}

export function Cars ({cars}) {
    const hasCars = cars?.length > 0

    return (

        hasCars
        ? <ListOfCars cars={cars} />
        : <NoCarResponse/>
    )
}