import React from 'react'
import '../components/formcss.css'
import { useState } from 'react';
// import * as API from '../Servicios/Servicios'


export function FormAuto () {

  const [modeloAuto, setModeloAuto] = useState('');
  const [precio, setPrecio] = useState('');
  const [condicionAuto, setCondicionAuto] = useState('');
  const [kilometraje, setKilometraje] = useState('');
  const [anio, setAnio] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [imagenes, setImagenes] = useState('');
  const [mensajeSuccess, setmensajeSuccess] = useState('');
  const [mensajeError, setmensajeError] = useState('');


  const registroForm  = async (event)=>{
    event.preventDefault();
    const user = await API.FormAuto({modeloAuto, precio, condicionAuto, kilometraje,anio,localidad,imagenes})
    if(user.status){
        setmensajeSuccess(user.mensaje)
        setTimeout(()=>{
            setmensajeSuccess('');
        }, 4000)
        window.location.href=('/')
        window.alert("Elauto se publicó correctamente")
    } else{
        setmensajeError(user.mensaje)
        setTimeout(()=>{
            setmensajeError('');
        }, 3000)
        window.alert(user.mensaje)
    }
  }

    return (
        <>

{ mensajeSuccess && (<Alert color='success'>{mensajeSuccess}</Alert>) }
      
      <form onSubmit={registroForm}>  
      <div className="container" >
      <div className="row justify-content-center" id="form">
      <div className="col-md-8">
      <h1 id="registro">Subir tu Auto</h1>
      <div className="styled-form" width = "60%">

          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="carModel"
              name="carModel"
              value={modeloAuto}
              onChange={(event)=>setModeloAuto(event.target.value)}
            />
            <label htmlFor="carModel" className="text">Modelo de Auto</label>
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={precio}
              onChange={(event)=>setPrecio(event.target.value)}
            />
            <label htmlFor="price" className="text">Precio</label>
          </div>

          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="carCondition"
              name="carCondition"
              value={condicionAuto}
              onChange={(event)=>setCondicionAuto(event.target.value)}
            />
            <label htmlFor="carCondition" className="text">Condición del Auto</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="mileage"
              name="mileage"
              value={kilometraje}
              onChange={(event)=>setKilometraje(event.target.value)}
            />
            <label htmlFor="mileage" className="text">Kilometraje</label>


          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="year"
              name="year"
              value={anio}
              onChange={(event)=>setAnio(event.target.value)}
            />
            <label htmlFor="year" className="text">Año</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={localidad}
              onChange={(event)=>setLocalidad(event.target.value)}
            />
            <label htmlFor="location" className="text">Localidad</label>
          </div>
          <div className="form-group">
            <label htmlFor="images" className="text">Subir imágenes</label>
            <input
              required
              type="file"
              className="form-control-file"
              id="images"
              name="images"
              multiple
              value = {imagenes}
              onChange={(event)=>setImagenes(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-info">Enviar</button>
        </div>
      </div>
      <div width="500px" height = "400px">
      <img src="/img/hombrecitos.jpg" id='imagen-form' style={{ position: "relative", zIndex: 1 }}/>
      </div>
    
    </div>
    <footer id="futer">TodoPlanes</footer>
  </div>
</form>
        </>
    )
}

export default FormAuto