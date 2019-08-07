import React, {Component} from 'react'
import './jokes.css'

export default class Jokes extends Component {
  constructor() {
    super()
    this.state = {
      jokesData: ''
    }
  }

componentDidMount(){
  const jokes = 'https://api.chucknorris.io/jokes/random'

  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      this.setState({
        jokesData: response.value
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      this.setState({
        jokesData2: response.value      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      this.setState({
        jokesData3: response.value
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      this.setState({
        jokesData4: response.value
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      this.setState({
        jokesData5:response.value
      })
    })
  fetch(jokes)
    .then(response => response.json())
    .then(response => {
      this.setState({
        jokesData6: response.value
      })
    })
}



  render () {
    const { jokesData, jokesData2, jokesData3, jokesData4, jokesData5, jokesData6} = this.state;
    return (
    <div className="joke-div">
    <h1 className="jokes"><u>Chuck Norris Jokes That Kick Ass Like Chuck Norris</u></h1>
    <h2>{jokesData}</h2><br />
    <h2>{jokesData2}</h2><br />
    <h2>{jokesData3}</h2><br />
    <h2>{jokesData4}</h2><br />
    <h2>{jokesData5}</h2><br />
    <h2>{jokesData6}</h2><br />
    </div>

    )
  }
}
