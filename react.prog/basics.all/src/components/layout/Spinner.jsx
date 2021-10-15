import React from 'react'
import spinner from "./spinner.gif"


// can return Fragment as is 
export const Spinner = () => <div>
    <img src={spinner} alt="#" style={spinnerStyle} />
</div>



const spinnerStyle = {
    with: '200px',
    margin: 'auto',
    display: 'block'
}