import React, { Component } from 'react';
import './Widget.css';
import metro from './Photos/metro.png';
import num from './Photos/6.png';

class Wid5 extends Component {
      state = {
        data: []
            }

    componentDidMount() {
        fetch(this.props.url)                      //On récupère les données de l'Url passée en props
        .then(data => data.json())                 //On les passe en format JSON
        .then(data => this.setState({data}))       //On les intègre dans nos state
    }

    componentDidUpdate() {
      console.log("The component just updated")
    }

    render() {
      const data = this.state.data;
      const dataList = data.context;

      if(data && dataList) {
        return (
          <div>
            <div>                 {/*On récupère l'icone métro, le numéro, l'arret, la destination et l'heure de passage*/}
              <img src={metro} id="metro" alt="metro"/><img src={num} id="metro" alt="num"/>
              {data.departures[0].stop_date_time.arrival_date_time.substr(9, 2)}:{data.departures[0].stop_date_time.arrival_date_time.substr(11, 2)}-{data.departures[0].stop_point.name.substr(0, 10)} {"-->"} {data.departures[0].display_informations.direction.substr(0, 26)}
            </div>
            <div>
              <img src={metro} id="metro" alt="metro"/><img src={num} id="metro" alt="num"/>
              {data.departures[1].stop_date_time.arrival_date_time.substr(9, 2)}:{data.departures[1].stop_date_time.arrival_date_time.substr(11, 2)}-{data.departures[1].stop_point.name.substr(0, 10)} {"-->"} {data.departures[1].display_informations.direction.substr(0, 26)}
            </div>
            <div>
              <img src={metro} id="metro" alt="metro"/><img src={num} id="metro" alt="num"/>
              {data.departures[2].stop_date_time.arrival_date_time.substr(9, 2)}:{data.departures[2].stop_date_time.arrival_date_time.substr(11, 2)}-{data.departures[2].stop_point.name.substr(0, 10)} {"-->"} {data.departures[2].display_informations.direction.substr(0, 26)}
            </div>
            <div>
              <img src={metro} id="metro" alt="metro"/><img src={num} id="metro" alt="num"/>
              {data.departures[3].stop_date_time.arrival_date_time.substr(9, 2)}:{data.departures[3].stop_date_time.arrival_date_time.substr(11, 2)}-{data.departures[3].stop_point.name.substr(0, 10)} {"-->"} {data.departures[3].display_informations.direction.substr(0, 26)}
            </div>
            <div>
              <img src={metro} id="metro" alt="metro"/><img src={num} id="metro" alt="num"/>
              {data.departures[4].stop_date_time.arrival_date_time.substr(9, 2)}:{data.departures[4].stop_date_time.arrival_date_time.substr(11, 2)}-{data.departures[4].stop_point.name.substr(0, 10)} {"-->"} {data.departures[4].display_informations.direction.substr(0, 26)}
            </div>
          </div>
        )
      }else{
        return (<div>Loading...</div>)
      }
    }
}

export default Wid5;