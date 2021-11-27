import React, { Component } from 'react';
import './Widget.css';

class Wid2 extends Component {
  state = {
    post : {}
  }

  /*componentDidMount(){
    //console.log(this.props.url);

    fetch(this.props.url)
    .then((response) => {
      return response.json()
    })
    .then((result) => {
      this.setState({post: result})
    })
  }*/

  componentDidMount() {
    fetch(this.props.url)
    .then(data => data.json())
    .then(data => this.setState({post: data}))
  }
  
  componentDidUpdate() {
    console.log("The component just updated")
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