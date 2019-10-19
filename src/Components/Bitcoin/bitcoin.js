import React, { Component } from 'react';
import PriceContainer from './priceContainer';


export default class Bitcoin extends Component {
  constructor(){
  super()
    this.state = {
      price: ''
    }
  }
  intervalID;

fetchData = () => {
   const bitcoinPrice = `https://api.coindesk.com/v1/bpi/currentprice.json`

    fetch (bitcoinPrice)
      .then(response => response.json())
      .then(response => this.setState({
        price: response
    }))
}
  componentDidMount() {
    this.fetchData();
    this.intervalID = setInterval(this.fetchData.bind(this), 1000);
  }

  componentWillUnmount() {
        /*
          stop getData() from continuing to run even
          after unmounting this component
        */
        clearInterval(this.intervalID);
      }

    render() {
      return(
        <>

        {this.state.price
          ? <PriceContainer price={this.state.price} />
          : <h1>Not Loaded</h1>
      }
        </>
      )
    }
  }
