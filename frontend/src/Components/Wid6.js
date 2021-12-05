import React, { Component, Carousel } from 'react';
import './Widget.css';

class Wid6 extends Component {
    state = {
      data : []
    }
  
  componentDidMount(){
    //console.log(this.props.url);
    fetch(this.props.url)
    .then(data => data.json())
    .then(data => this.setState({data}))
  }

  componentDidUpdate() {
    console.log("The component just updated")
  }

    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}
export default Wid6;


