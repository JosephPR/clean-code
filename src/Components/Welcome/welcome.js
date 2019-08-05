import React from 'react';
import { Link } from 'react-router-dom';


import './welcome.css';

export default function Welcome() {
  return (
    <>
    <h1 className='hi'>Hello</h1>

    <div className='welcome'>
    <Link to="/genie"><img src='https://media3.giphy.com/media/jU1vHM8oQBaZHW1bT3/giphy.gif?cid=790b76115d47418f7669484d7327db44&rid=giphy.gif' alt='genie' /></Link>
      <Link to="/disney"><img src='https://media.giphy.com/media/U51L9vKEbdgyrUeRHM/giphy.gif' alt='alice' /></Link>
    <img src='https://media1.giphy.com/media/ykvRcYBJBiQwg/200w.webp?cid=790b76115d473e3179546c30493793ff&rid=200w.webp' alt='hello'/>
  </div>



    </>
  )
}
