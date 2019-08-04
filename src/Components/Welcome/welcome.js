import React from 'react';

import './welcome.css';

export default function Welcome() {
  return (
    <>
    <h1 className='hi'>Hello</h1>
    <div className='welcome'>
      <img src='https://media3.giphy.com/media/jU1vHM8oQBaZHW1bT3/giphy.gif?cid=790b76115d47418f7669484d7327db44&rid=giphy.gif' alt='genie' />
    <img src='https://media1.giphy.com/media/ykvRcYBJBiQwg/200w.webp?cid=790b76115d473e3179546c30493793ff&rid=200w.webp' alt='hello'/>
  </div>
  <div className='intro'>
    <p>Thank you for stopping by this is the start of something big!</p>
    <p>This is simba you might know him from the lion king!</p>
  </div>

    </>
  )
}
