import React, { Component } from 'react';
import './Widget.css';

class Wid2 extends Component {
  state = {
    data : []
  }

  componentDidMount() {
    fetch(this.props.url)
    .then(data => data.json())
    .then(data => this.setState({data}))
  }
  
  componentDidUpdate() {
    console.log("The component just updated")
  }

  render(){
    console.log(this.state.data)
    return(
      <div className="Widget">
          <p style={{textAlign: "center"}}>{this.state.data.formatted}</p>
      </div>
    )
  }
}

export default Wid2;