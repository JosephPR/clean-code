import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

import './disney.css'

export default class Disney extends Component {
  constructor () {
    super()
    this.state = {
      movies: ""
    }
  };

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=50e5abde30a8ed835979286acde26825&query=alice+in+wonderland&page=1`)
    .then(response => response.json())
    .then(response => this.setState({
      movies: response.results
    }))
  }

  getMovies() {
    return this.state.movies.map(movie => {
      return (
        <Card className='card' key={movie.id}>
    <Image className='image' alt='cover' src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} wrapped ui={false} />
    <Card.Content>

      <Card.Header>{movie.title}</Card.Header>
      <br />
      <Card.Description>
        {movie.overview}
      </Card.Description>
      <br />
      <Card.Content className='release-date'><h4>Release Date</h4>
      {movie.release_date}
      </Card.Content>
    </Card.Content>

  </Card>



      )
    })
  }


  render(){
  return (
      <div className='disney-heading'>
      <h1>Alice's Page</h1>
      <div className='alice'>
        <img src='https://media0.giphy.com/media/XE7cymaYx2MbhnrSeG/200.webp?cid=790b76115d474d486b6a31566b70c89d&rid=200.webp' alt='queen' />
        <img src='https://media1.giphy.com/media/11ppykHW7i8UFO/200.webp?cid=790b76115d474d486b6a31566b70c89d&rid=200.webp' alt='cat' />
        <img src='https://media1.giphy.com/media/FaTrieSsFHcaI/giphy.gif?cid=790b76115d474d486b6a31566b70c89d&rid=giphy.gif' alt='alice' />

      </div>
      <iframe className='video' title='chescat' width="560" height="315" src="https://www.youtube.com/embed/G4fHre-yRPY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {this.state.movies
          ?  <div className='movies'>{this.getMovies()}</div>
          : <h1> NOt LOaDiNg!1</h1>
        }


      </div>
    )
  }
}
