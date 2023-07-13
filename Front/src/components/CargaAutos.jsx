import React from 'react'
import '../Css/formcss.css'
import { useState } from 'react';
import  {cargarFormulario}  from '../servicios/servicios';


export function CargaAutos () {

  const [formData, setFormData] = useState({
    nombrePlan: '',
    precio: '',
    cantidadCuotas: '',
    adjudicado: '',
    anioInicio: '',
    localidad: '',
    telefono: '',
    imgPath: null
  });


  const handleChange = (e) => {
    if (e.target.name === 'imgPath') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
    console.log('handleChange consolelog ',formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handlesubmit consolelog ',formData);
    try {
      const response = await cargarFormulario(formData);
      console.log('Datos enviados al backend:', response);

      // Reiniciar los valores de los campos después de enviar
      setFormData({
        nombrePlan: '',
        precio: '',
        cantidadCuotas: '',
        adjudicado: '',
        anioInicio: '',
        localidad: '',
        telefono: '',
        imgPath: null
      });
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
    }
    window.location.reload(true);
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
  };
    return (
        <>
       <form action="">
  <div className="container" >
    <div className="row justify-content-center" id="form">
      <div className="col-md-8">
        <h1 id="registro">Subí tu Plan</h1>
        <div className="styled-form" width = "60%">

          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="nombrePlan"
              name="nombrePlan"
              value={formData.nombrePlan}
              onChange={handleChange}
            />
            <label htmlFor="nombrePlan" className="text">Nombre del Plan</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
            />
            <label htmlFor="precio" className="text">Precio</label>
          </div>
          <div className="form-group">
            <input
              required
              type="number"
              className="form-control"
              id="cantidadCuotas"
              name="cantidadCuotas"
              value={formData.cantidadCuotas}
              onChange={handleChange}
            />
            <label htmlFor="carCondition" className="text">Cantidad de Cuotas</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="adjudicado"
              name="adjudicado"
              value={formData.adjudicado}
              onChange={handleChange}
            />
            <label htmlFor="adjudicado" className="text">¿Adjudicado?</label>


          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="anioInicio"
              name="anioInicio"
              value={formData.anioInicio}
              onChange={handleChange}
            />
            <label htmlFor="anioInicio" className="text">Año de Inicio</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="localidad"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
            />
            <label htmlFor="localidad" className="text">Localidad</label>
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <label htmlFor="telefono" className="text">Telefono</label>
          </div>
          <div className="form-group">
            <label htmlFor="imgPath" className="text">Subir imágenes</label>
            <input
              required
              type="file"
              className="form-control-file"
              id="imgPath"
              name="imgPath"
              accept="image/*"
              multiple
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-info">Enviar</button>
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

export default CargaAutos