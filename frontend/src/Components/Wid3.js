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
      console.log(data);
      console.log(dataCity);
      console.log(dataList);

      if(data && dataCity &&dataList) {
        return(
          <div className="Widget">
            <h2 style= {{textAlign: "center"}}>{dataCity.name}</h2>
            <div>
              <img id="img" src={this.getHTMLElementFromIcon(dataList[0].weather[0].icon)} />
              <h2 id="des">{dataList[0].weather[0].description}</h2>
              <h3><small> Température: {dataList[0].temp.day}° C</small></h3>
              <h3><small>Ressentie: {dataList[0].feels_like.day}° C</small></h3>
            </div>
            <div id="small-icon">
              <div id="sicon"><img src={this.getHTMLElementFromIcon(dataList[1].weather[0].icon)} /><p>{'\n'} Demain</p></div>
              <div id="sicon"><img src={this.getHTMLElementFromIcon(dataList[2].weather[0].icon)} /><p>{'\n'} Après-demain</p></div>
            </div>
          </div>
        )
        /*return (
          <div className="Widget">
            <h1 style= {{textAlign: "center"}}>{data.name}</h1>
            <div>
              <img id="img" src={this.getHTMLElementFromIcon(data.weather[0].icon)} />
              <h2 id="des">{data.weather[0].description}</h2>
            </div>
            <h3>Température: {data.main.temp}° C</h3>
            <h3>Ressentie: {data.main.feels_like}° C</h3>
          </div>
        )*/

      }else{
        return (<div>Loading...</div>)
      }
    }
    
}


export default Wid3;