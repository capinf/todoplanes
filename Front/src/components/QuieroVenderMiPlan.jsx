import React, { useState } from "react"

export function CargaPlan() {

  const [datosPlan, setDatosPlan] = useState('')

  //Forma NO CONTROLADA por REAC (Solo JS)
  
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const  datosplan  = Object.fromEntries(new window.FormData(event.target))
  //   console.log( datosplan )
  // }


  //Forma controlada por React

  const handleChange = (e) => {
    setDatosPlan({ ...datosPlan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const DatosForm = JSON.stringify(datosPlan);
    console.log(DatosForm);
  };


    return (
      <>
      <div className="CardCargarPlan">
      <h1 className="titulazo">Datos del Plan a Vender</h1>
      <form className="formularioPlan" onSubmit={handleSubmit}>
      <p>Nombre del Plan</p>
      <input required name="Plan" type="text" onChange={handleChange}/>
      <p>Cuotas Faltantes</p>
      <input required name="Cuotas" type="number" onChange={handleChange} />
      <p>Marca y Modelo</p>
      <input required  name="MarcaYmodelo" type="text" onChange={handleChange} />
      <p>Descripcion</p>
      <textarea required  name="Descripcion" type="text" onChange={handleChange} />
      <button type="submit" >Guardar Plan</button>
      </form>
      </div>
      </>
    )
  }