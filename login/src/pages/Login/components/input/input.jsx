import React from "react";
import '../input/input.css';


const Input = ({attribute, handleChange, param}) =>{
    return (
        <div className='input-container'>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={ (e) => handleChange(e.targetname, e.target.value)}
            className='regular-style'
            />
        </div>
    )
};

export default Input;