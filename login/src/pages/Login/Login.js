import React from "react";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/input/input";

const Login = ()=>{
    return(
        <div className="login-container">
            <Title text='Soy un title'/>
            <Label text='Email'/>
            <Input  />
            <Label text='Password'/>
            <Input  />

        </div>
    )
};

export default Login;