import React, { useState } from "react";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/input/input";
import '../Login/Login.css'
import "./components/input/input.css";


const Login = ()=>{

    const[ Email, setEmail] = useState('');
    const[ Password, setPassword] = useState('');

    function handleChange(name,value){
        if(name === 'Email'){
            setEmail(value)
        }else{
            setPassword(value)
        }
    };

    function handleSubmit(){
        let account = {Email, Password}
        if(account){
            console.log('account:', account)
        }
    };

    return(
        <div className="contenedor-general">
              <div className='login-container'>
                <Title text='Soy un title'/>
                <Label text='Email'/>
                <Input  
                attribute={{
                    id:'Email',
                    name:'Email',
                    type:'Email',
                    placeholder:'Email'
                }}
                handleChange={handleChange}

                />
                <Label text='Password'/>
                <Input  
                attribute={{
                    id:'Password',
                    name:'Password',
                    type:'password',
                    placeholder:'Password'
                }}
                handleChange={handleChange}
                />
               <div className="button-container">
               <button onClick={(e) => handleSubmit} className="submit-button">
                    Log in
                </button>
               </div>
            </div>
            <div className='imagen-formulario'>

            </div> 
        </div>
      
    )
};

export default Login;