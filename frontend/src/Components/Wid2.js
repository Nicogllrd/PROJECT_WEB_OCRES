import React, { Component } from 'react';
import './Widget.css';

class Wid2 extends Component {
  state = {
    data : [],
    date: new Date()
  }

  componentDidMount() {
    this.fetch(); 
  }

  fetch(){
    fetch(this.props.url)
    .then(data => data.json())
    .then(data => this.setState({data}))
  } 

  componentDidUpdate() {
    console.log("The component just updated")
  }

  render(){
    //console.log(this.state.data)
    return(
      <div className="Widget">
          <h3 style={{textAlign: "center"}}>{this.state.data.formatted}</h3>
      </div>
    )
  }
}

export default Wid2;