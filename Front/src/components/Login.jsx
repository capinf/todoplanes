import React, { useEffect } from "react";
import '../Css/Login.css'


export function Login () {

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
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form class="formulario" action="#">
			<h1 id="titulazo">Crear Cuenta</h1>
			<input required id="inpunt" type="text" placeholder="Nombre" />
			<input required id="inpunt" type="email" placeholder="Correo" />
			<input required id="inpunt" type="password" placeholder="Contraseña" />
			<input required id="inpunt" type="number" placeholder="Telefono" />
			<label><input required type="checkbox" id="cbox1" value="first_checkbox"  /> Aceptas <a href="">terminos y condiciones</a> </label><br></br>
			<button id="luisbutton">Registrarse</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form class="formulario" action="#">
			<h1 id="titulazo" >Iniciar Sesión</h1>
			<input id="inpunt" type="email" placeholder="Email" />
			<input id="inpunt" type="password" placeholder="Password" />
			<button id="luisbutton">Iniciar Sesión</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1 id="titulazo">Bienvenido!</h1>
				<p id="parrafazo">Para mantenerte conectado con nosotros por favor ingrese su informacion personal</p>
				<button class="ghost" id="signIn">Iniciar Sesión</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1 id="titulazo" >Hola, amigo!</h1>
				<p id="parrafazo">Ingresa tus datos para crear un usuario</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    )
}