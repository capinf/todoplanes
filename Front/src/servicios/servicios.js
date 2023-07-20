const API_URL = 'http://localhost:3000'

////////LOGIN//////////////


export async function Login (datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function Registro(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registro`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){
        // console.log('no funciona')
    }
}

/// Editar Formulario ///

export function UpdateFormulario(idFormulario, datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/edit_formulario/${idFormulario}`, requestOptions)
    
}

export async function getFormulariobyId(idFormulario){
    try{
        const response = await fetch(`${API_URL}/formulario/${idFormulario}`);
        const data = await response.json();
        console.log(data)
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

/// ALTA Y BAJA USUARIOS ///

export async function getUsuario(){
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token)
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/usuarios`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}



export async function bajaUsuario(id){
    
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    };
    try{
        const response = await fetch(`${API_URL}/bajausuario/${id}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function altaUsuario(id){
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
        }
    };
    try{
        const response = await fetch(`${API_URL}/altausuario/${id}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}   

/// EDITAR ROL ///

export async function getUsuarioById(id){

    const token = JSON.parse(localStorage.getItem('token'));
    
    const  requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
    console.log("hola")
    try{
        const response = await fetch(`${API_URL}/usuarios/${id}`,requestOptions);
        const data = await response.json();
        console.log(data)
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}


export function UpdateUsuario(id, datos){ 
 
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
           

        },
        body: JSON.stringify(datos)
    };
    fetch(`${API_URL}/edit_usuario/${id}`, requestOptions)
    
}

//TRAER DATOS DE TABLA PLANES//
// ENSAMBLAR SEGUN CORRESPONDA
export async function getPlanesAPI(){
    try{

        const response = await fetch(`${API_URL}/autos`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

export async function getPlanesAPIpremium(){
    try{

        const response = await fetch(`${API_URL}/autosPremium`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

export async function getPlanesAPInormal(){
    try{

        const response = await fetch(`${API_URL}/autosNormal`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}
//          ^^^^^^          //
//          ||||||
//TRAER DATOS DE TABLA PLANES//

// export async function cargarFormulario(formData){
//     const requestOptions={
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//     };
//     try{
//     const response = await fetch(`${API_URL}/cargarformulario`, requestOptions)
//     const data = await response.json();
//     console.log(data)
//     return data;
//     } catch(e){
//         // console.log('no funciona')
//     }
// }

//////////////////////////////////////////////
////// CARGA DE DATOS FORM PLANES////////////
////////////////////////////////////////////
export async function cargarFormulario(formData) {
    const { nombrePlan, precio, cantidadCuotas, adjudicado, anioInicio, localidad, telefono, imgPath, rolform } = formData;

    const form = new FormData();
    form.append('nombrePlan', nombrePlan);
    form.append('precio', precio);
    form.append('cantidadCuotas', cantidadCuotas);
    form.append('adjudicado', adjudicado);
    form.append('anioInicio', anioInicio);
    form.append('localidad', localidad);
    form.append('telefono', telefono);
    form.append('imgPath', imgPath);
    form.append('rolform', rolform);
    console.log('serviciosjs despues de appends, form',form);

    const requestOptions={
        method: 'POST',
        body: form
    };

  
    try {
      const response = await fetch(`${API_URL}/cargarformulario`, requestOptions);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }

//////////////////////////////////////////////
////// CARGA DE DATOS FORM PLANES////////////
////////////////////////////////////////////