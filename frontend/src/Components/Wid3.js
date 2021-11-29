import React, { Component } from 'react';
import './Widget.css';

const API_URL_ICON = "http://openweathermap.org/img/wn/";


//<img src = {this.getHTMLElementFromIcon(data.weather[0].icon)} alt="icon"/>



class Wid3 extends Component {
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

    getHTMLElementFromIcon(icon){ 
      return `${API_URL_ICON}${icon}@2x.png`;
    }

    rechercher(){
      var city = document.getElementById('city-input').value;
      //console.log(city);
    }

    render() {
      //console.log(this.state.data);
      const data = this.state.data;

      if(data && data.main && data.weather) {
        return (
          <div className="Widget">
            <h1 style= {{textAlign: "center"}}>{data.name}</h1>
            <div>
              <img id="img" src={this.getHTMLElementFromIcon(data.weather[0].icon)} />
              <h2 id="des">{data.weather[0].description}</h2>
            </div>
            <h3>Température: {data.main.temp}° C</h3>
            <h3>Ressentie: {data.main.feels_like}° C</h3>
          </div>
        )

      }else{
        return (<div>Loading...</div>)
      }
    }
    
}


export default Wid3;