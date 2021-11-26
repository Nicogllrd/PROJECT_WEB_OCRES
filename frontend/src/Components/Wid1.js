import React, { Component } from 'react';
import './Widget.css';

class Wid1 extends Component {
  constructor(props) {
    super(props);
    let res = this.state = {
      post : {}
    }
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
      //console.log(this);
    return(
      <div className="Widget">
        <h1>Notre dernier article</h1>
        {this.state.post.title}
      </div>
    )
  }
}

export default Wid1;