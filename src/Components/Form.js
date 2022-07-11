import React,{useState} from 'react';
import './form.css';
//import {} from "react-router-dom";
import { Redirect, useNavigate} from 'react-router-dom';

function Form() {  
	const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userName=document.getElementById('userName').value;
        const password=document.getElementById('userpassword').value;
		

        console.log(userName,password);
        if(userName=="admin" && password=="123"){

                navigate('/Main');
            }
        
    }
    return(
        

<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={handleSubmit}>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" id='userName'  placeholder="User name/(admin)"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" id='userpassword' placeholder="Password/(123)"/>
				</div>
				<button onClick={(e)=>{handleSubmit(e);}} class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
					
			</form>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

    )
}

export default Form;