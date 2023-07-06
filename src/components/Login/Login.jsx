import React, { useEffect, useState } from "react";
import '../Login/Login.css'
// import * as API from '../../Servicios/Servicios'


export function Login () {

	const [username, setUsername] = useState('');
	const [apellidoynombre, setApellidoyNombre] = useState('');
	const [telefono, setTelefono] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeError, setmensajeError] = useState('');
    const [sesion, setSesion] = useState('');

//Registrarse


const registroForm  = async (event)=>{
	event.preventDefault();
	const user = await API.Login({username, apellidoynombre, telefono, email, password})
	if(user.status){
		setmensajeSuccess(user.mensaje)
		setTimeout(()=>{
			setmensajeSuccess('');
		}, 4000)
		window.location.href=('/Login')
		window.alert("El usuario se creo correctamente")
	} else{
		setmensajeError(user.mensaje)
		setTimeout(()=>{
			setmensajeError('');
		}, 3000)
		window.alert(user.mensaje)
	}
}



//Logearse
	const enviarForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Login({email, password})
        console.log(email,password)
        if(user.status){
            console.log("entra en el if")
            console.log(user.token);
            window.localStorage.setItem('usuario', JSON.stringify(user));
            window.localStorage.setItem('token', JSON.stringify(user.token));
            setSesion(sesion)
            setEmail('')
            setPassword('')
            window.location.reload(true)
        }else{
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
            }, 4000)
        }
    }
	




    useEffect(() => {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");
    
        signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
        });
    
        signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
        });
    
        // Limpieza de los event listeners cuando el componente se desmonta
        return () => {
        signUpButton.removeEventListener("click", () => {
            container.classList.add("right-panel-active");
        });
    
        signInButton.removeEventListener("click", () => {
            container.classList.remove("right-panel-active");
        });
        };
    }, []);

    return(

	// REGISTRO
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form class="formulario" onSubmit={registroForm}>
			<h1 id="titulazo">Crear tu cuenta</h1>

			<input required id="inpunt" type="text" placeholder="Nombre de Usuario" value={username} onChange={(event)=> setUsername(event.target.value)} />
			<input required id="inpunt" type="text" placeholder="Apellido y Nombre" value={apellidoynombre} onChange={(event)=> setApellidoyNombre(event.target.value)} />
			<input required id="inpunt" type="number" placeholder="Telefono" value={telefono} onChange={(event)=> setTelefono(event.target.value)}/>
			<input required id="inpunt" type="email" placeholder="Email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
			<input required id="inpunt" type="password" placeholder="Contraseña" value={password} onChange={(event)=> setPassword(event.target.value)}/>

			<button id="luisbutton">Registrarse</button>
		</form>
	</div>
		
	{/* Login */}
		<div class="form-container sign-in-container">
		<form class="formulario" onSubmit={enviarForm}>
			<h1 id="titulazo" >Inicio de Sesión</h1>
			
			<input id="inpunt" type="email" placeholder="Email" value={email} onChange={(event)=> setEmail(event.target.value)} />
			<input id="inpunt" type="password" placeholder="Contraseña" value={password} onChange={(event)=> setPassword(event.target.value)}/>
			<button id="luisbutton">Iniciar Sesión</button>
		</form>
	</div>

	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1 id="titulazo">Bienvenido de Nuevo!</h1>
				<p>Inicia sesión con tus datos personales</p>
				<button class="ghost" id="signIn">Iniciar Sesión</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1 id="titulazo" >Hola Amigo!</h1>
				<p id="parrafazo">¿No tiene una cuenta? Registrese aquí!</p>
				<button class="ghost" id="signUp">Registrarse</button>
			</div>
		</div>
	</div>
</div>
    )
}

export default Login