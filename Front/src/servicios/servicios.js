const API_URL = 'http://localhost:3300'

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