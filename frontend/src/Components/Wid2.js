import React, { Component } from 'react';
import './Widget.css';

class Wid2 extends Component {
  state = {
    post : {}
  }

  componentDidMount(){
    fetch(this.props.url)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({post: result})
    })
  }

  render(){
    return(
      <div className="Widget">
        <h1>Notre dernier article</h1>
        {this.state.post.title}
      </div>
    )
  }
}

export default Wid2;