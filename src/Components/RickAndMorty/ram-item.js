import React, { Component } from 'react'
import '../../App.css'
import './ram.css'


export default class RamItem extends Component {



render() {
  const { name, status, species, origin, type, image } = this.props
  return(
    <React.Fragment>

        <div className="ram-card-container">
        <h1 id="name"> {name}</h1>
        <img className="ram-pics" src={image} alt="pics" />
        <h3><u>Status:</u>  {status}</h3>
        <h3><u>Species:</u> {species}</h3>
        <h3><u>Origin:</u> {origin}</h3>
        <h3> {type}</h3>
          </div>
    </React.Fragment>
  )
  }
}
