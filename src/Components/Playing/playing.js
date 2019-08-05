import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

import './playing.css'

export default class Playing extends Component {
  constructor(){
    super()
    this.state = {
      nowPlaying: ""
    }
  }
  componentDidMount() {
    fetch(`https://api.theMoviedb.org/3/movie/now_playing?api_key=50e5abde30a8ed835979286acde26825&language=en-US&page=1`)
    .then(response => response.json())
    .then(response => this.setState({
      nowPlaying: response.results
    }))
  }

  inTheaters() {
    return this.state.nowPlaying.map(nowPlaying => {
      return (
        <Card className='card' key={nowPlaying.id}>
    <Image className='image' alt='cover' src={`http://image.tmdb.org/t/p/w185//${nowPlaying.poster_path}`} wrapped ui={false} />
    <Card.Content>

      <Card.Header>{nowPlaying.title}</Card.Header>
      <br />
      <Card.Description>
        {nowPlaying.overview}
      </Card.Description>
      <br />
      <Card.Content className='release-date'><h4>Release Date</h4>
      {nowPlaying.release_date}
      </Card.Content>
    </Card.Content>
  </Card>
      )
    })
  }



  render(){
    return (
      <>
      <h1 className="title">Movies that are playing in the theaters now!</h1>
      {this.state.nowPlaying
        ?  <div className='nowPlaying'>{this.inTheaters()}</div>
        : <h1> NOt LOaDiNg!1</h1>
      }
      </>
    )
  }

}
