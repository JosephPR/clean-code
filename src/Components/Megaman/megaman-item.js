import React, { Component } from 'react';
import './megaman.css'

export default class MegamanItem extends Component {

  render(){
    const { name, weapon, sprite1, weakness} = this.props;
    return(
      <React.Fragment>
      <div className="megaman-card-container">
      <h2>{name}</h2>
      <img className="megaman-image" src={sprite1} alt="megaman" />
      <p><b>Weapon:</b>  {weapon}</p>
      <p><b>Weakness:</b>  {weakness}</p>
      </div>
      </React.Fragment>
    )
  }
}
