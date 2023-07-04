import React from 'react'
import '../components/formcss.css'
import { useState } from 'react';


export function FormAuto () {

  const [formData, setFormData] = useState({
    carModel: '',
    price: '',
    carCondition: '',
    mileage: '',
    year: '',
    location: '',
    images: [],
  });

  const handleChange = (e) => {
    if (e.target.name === 'images') {
      const images = Array.from(e.target.files);
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: images,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
  };
    return (
        <>
       <form action="">
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
              value={formData.carModel}
              onChange={handleChange}
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
              value={formData.price}
              onChange={handleChange}
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
              value={formData.carCondition}
              onChange={handleChange}
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
              value={formData.mileage}
              onChange={handleChange}
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
              value={formData.year}
              onChange={handleChange}
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
              value={formData.location}
              onChange={handleChange}
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
              onChange={handleChange}
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