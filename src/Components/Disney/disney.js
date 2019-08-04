import React from 'react';

import './disney.css'

export default function Disney() {
  return (
    <div className='disney-heading'>
    <h1>Disney Page</h1>
    <iframe title='chescat' width="560" height="315" src="https://www.youtube.com/embed/G4fHre-yRPY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className='alice'>
    <img src='https://media0.giphy.com/media/XE7cymaYx2MbhnrSeG/200.webp?cid=790b76115d474d486b6a31566b70c89d&rid=200.webp' alt='queen' />
    <img src='https://media1.giphy.com/media/11ppykHW7i8UFO/200.webp?cid=790b76115d474d486b6a31566b70c89d&rid=200.webp' alt='cat' />
    <img src='https://media1.giphy.com/media/FaTrieSsFHcaI/giphy.gif?cid=790b76115d474d486b6a31566b70c89d&rid=giphy.gif' alt='alice' />

    </div>
    </div>
  )

}
