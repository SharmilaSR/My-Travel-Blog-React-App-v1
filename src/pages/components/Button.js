import React from 'react'
import './Button.css';
import { Outlet, Link } from "react-router-dom";


const Button1 = () => {
  return (
    <>
     <div className='buttonIcon'>
    {/* <button className='click' type='button'><Link to="/products">AUSTRALIA</Link></button> */}
    <h3>AUSTRALIA</h3>
    </div>
    <div>
    </div>
    </>
  ) 
}
const Button2 = () => {
  return (
    <>
     <div className='buttonIcon'>
    {/* <button className='click' type='button'><Link to="/products">AUSTRALIA</Link></button> */}
    <h3>SPAIN</h3>
    </div>
    <div>
    </div>
    </>
  ) 
}
const Button3 = () => {
  return (
    <>
     <div className='buttonIcon'>
    {/* <button className='click' type='button'><Link to="/products">AUSTRALIA</Link></button> */}
    <h3>VIETNAM</h3>
    </div>
    <div>
    </div>
    </>
  ) 
}

export {Button1};
export {Button2};
export {Button3};

