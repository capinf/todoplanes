import '../Css/GridAutos.css'
function ListOfCars ({cars}) {

    return (
        <>
        <div className='Card'>
      <div className='carta-autos'>
        <ul className='gridAutos'>
        {
        cars.map(car =>(

            <li className='card-list' key={car.id}>
            <img className='card-image' src={car.img} alt="" />
            <h1 className='title'>{car.title}</h1>
            <div className="card-details">
            <p className='info'>Kilometraje: {car.kilometraje}</p>
            <p className='info'>Modelo: {car.año}</p>
            <p className='info'>{car.descripcion}</p>
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