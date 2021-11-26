import React, { Component } from 'react';
import './Widget.css';

const API_URL_ICON = "http://openweathermap.org/img/wn/";

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
      return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
    }

    render() {
      console.log(this.state.data);
      const weather = this.state.data;
      //const icon = `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`;
      if(weather && weather.main) {
        return (
          <div>
            <div className="Widget">
              <h1>Température à {weather.name}</h1>
              <p>Température {weather.main.temp}° C</p>
              <p>Ressentie {weather.main.feels_like}° C</p>
            </div>
          </div>
        )
      }else{
        return (<div>Loading...</div>)
      }
      
    }
}

export default Wid3;