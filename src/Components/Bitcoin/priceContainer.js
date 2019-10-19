import React from 'react';
import '../Beer/beer.css'

export default function PriceContainer (props) {
  const price = props.price.bpi.USD.rate
  return (
    <React.Fragment>
    <div className="price-card-list">
      <h1>Bitcoin Price :  {price}</h1>

    </div>
    </React.Fragment>
  )
}
