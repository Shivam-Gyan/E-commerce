import React from 'react'

const Input = (props) => {
    return (
        <div>
            {props?.label && <label>{props?.label}</label>}
            <input type='text' {...props}/>
        </div>
    )
}

export default Input;