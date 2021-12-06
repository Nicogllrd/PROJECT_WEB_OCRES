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

    render() {
      const data = this.state.data;
      const dataCity = this.state.data.city;
      const dataList = this.state.data.list;
      //console.log(data);
      //console.log(dataCity);
      //console.log(dataList);

      if(data && dataCity &&dataList) {
        return(
          <div className="Widget">
            <h2 style= {{textAlign: "center"}}>{dataCity.name}</h2>       {/* Nom de la ville*/}
            <div>
              <img id="img" src={this.getHTMLElementFromIcon(dataList[0].weather[0].icon)} alt="icon meteo"/> {/*Icone meteo*/}
              <h2 id="des">{dataList[0].weather[0].description}</h2>          {/*Description meteo*/}
              <h3><small> Température: {dataList[0].temp.day}° C</small></h3>     {/*Temperature */}
              <h3><small>Ressentie: {dataList[0].feels_like.day}° C</small></h3>      {/*Ressenti */}
            </div>
            <div id="small-icon">
              <div id="sicon"><img src={this.getHTMLElementFromIcon(dataList[1].weather[0].icon)} alt="icon meteo"/><p>{'\n'} Demain</p></div>      {/* meteo de demain*/}
              <div id="sicon"><img src={this.getHTMLElementFromIcon(dataList[2].weather[0].icon)} alt="icon meteo"/><p>{'\n'} Après-demain</p></div>      {/* meteo d'après-demain*/}
            </div>
          </div>
        )
      }else{
        return (<div>Loading...</div>)
      }
    }
    
}


export default Wid3;