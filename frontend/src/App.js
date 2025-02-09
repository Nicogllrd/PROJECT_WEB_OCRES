import React, { Component } from 'react';
import Wid1 from './Components/Wid1';
import Wid2 from './Components/Wid2';
import Wid3 from './Components/Wid3';
import Wid4 from './Components/Wid4';
import Wid5 from './Components/Wid5';
import Wid6 from './Components/Wid6';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Link} from "react-router-dom";

// Clé api        Voici toutes les clés API que nous allons utiliser 
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
const API_KEY1 = "HGJWFG4N8AQ66ICD";
const API_KEY2 = "6e04df26939547e2b5603480d057621b";
const API_KEY3 = "SADVDTXKM24E";
const API_KEY4 = "3b036afe-0110-4202-b9ed-99718476c2e0";

// Url API        Voici toutes les Url API que nous allons utiliser
const API_URL = "https://api.openweathermap.org/data/2.5/forecast/daily";
const API_URL1 = "https://www.alphavantage.co/query";
const API_URL2 ="https://newsapi.org/v2/top-headlines";
const API_URL3 = "http://api.timezonedb.com/v2.1/get-time-zone";
const API_URL4 = "https://api.navitia.io/v1/coverage/sandbox/lines/line%3ARAT%3AM6/stop_points/stop_point%3ARAT%3ASP%3ABIRHA1/departures";

const StockSymbol = 'googl';    //Entreprise affichée sur le widget de finance
const city="Paris";             //Ville de l'utilisateur

class App extends Component {
  constructor(){
    super();
                                                          //Tableau d'urls utilisés pour les widgets
    let urlList = this.state = [   
      {
        url: `${API_URL2}?country=fr&category=business&apiKey=${API_KEY2}`,
      },
      {
        url: `${API_URL4}?key=${API_KEY4}`,
      },
      {
        url: "http://localhost:3001/meeting",
      },
      {
        url: `${API_URL3}?key=${API_KEY3}&format=json&by=zone&zone=Europe/Paris`,
      },
      {
        url: `${API_URL1}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY1}`,
      },
      {
        url: `${API_URL}?q=${city}&units=metric&cnt=3&appid=${API_KEY}`,
      },
    ]
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-12 py-3">
            <div className="card border-primary bloc">
              <div className="col-12">
                <Wid1 url = {this.state[0].url} />      {/*Widget News*/} {/*On passe en props notre url récupérée du tableau ci-dessus*/}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 py-3 ">
            <div className="col-12">
              <div className="card border-primary bloc">
                <Wid3 url = {this.state[5].url} />        {/*Widget Meteo*/} {/*On passe en props notre url récupérée du tableau ci-dessus*/}
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-8 py-3">
            <div className="card border-primary carre">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 p-top-0 p-bottom-6 ">
                  <div className="card border-primary bloc">
                    <Wid5 url = {this.state[1].url} />        {/*Widget Metro*/} {/*On passe en props notre url récupérée du tableau ci-dessus*/}
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 p-top-0 p-bottom-6">
                  <div className="card border-primary bloc">
                    <Wid2 url = {this.state[3].url} />        {/*Widget heure*/} {/*On passe en props notre url récupérée du tableau ci-dessus*/}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 p-y-6">
                  <div className="card border-primary bloc">
                    <Wid6 />                              {/*Widget backend*/} {/*On passe en props notre url récupérée du tableau ci-dessus*/}
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 p-y-6">
                  <div className="card border-primary bloc">
                    <Wid4 url = {this.state[4].url} />        {/*Widget finance*/} {/*On passe en props notre url récupérée du tableau ci-dessus*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Link to="/Admin">Admin</Link>                      {/*On utilise notre route créée dans index.js*/}
        </div>
      </div>
    )
  }
}

export default App;


