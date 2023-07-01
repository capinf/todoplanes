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
			<h1 id="titulazo">Create Account</h1>
			<div class="social-container">
				<a id="Zelda" href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a id="Zelda" href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a id="Zelda" href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input id="inpunt" type="text" placeholder="Name" />
			<input id="inpunt" type="email" placeholder="Email" />
			<input id="inpunt" type="password" placeholder="Password" />
			<button id="luisbutton">Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form class="formulario" action="#">
			<h1 id="titulazo" >Sign in</h1>
			<div class="social-container">
				<a id="Zelda" href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a id="Zelda" href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a id="Zelda" href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input id="inpunt" type="email" placeholder="Email" />
			<input id="inpunt" type="password" placeholder="Password" />
			<a id="Zelda" href="#">Forgot your password?</a>
			<button id="luisbutton">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1 id="titulazo">Welcome Back!</h1>
				<p id="parrafazo">To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1 id="titulazo" >Hello, Friend!</h1>
				<p id="parrafazo">Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    )
}