import React, { Component } from 'react';
import './Widget.css';

class Wid2 extends Component {
  state = {
    data : [],
  }

  componentDidMount() {
    this.fetch(); 
  }

  fetch(){
    fetch(this.props.url)                             //On récupère les données de l'Url passée en props
    .then(data => data.json())                        //On les passe en format JSON
    .then(data => this.setState({data}))              //On les intègre dans nos state
  } 

  componentDidUpdate() {
    console.log("The component just updated")
  }

  render(){
    //console.log(this.state.data)
    return(
      <div className="Widget">
          <h4 style={{textAlign: "center"}}>{this.state.data.formatted}</h4>          {/* On cherche les infos dans le JSON */}
      </div>
    )
  }
}

export default Wid2;