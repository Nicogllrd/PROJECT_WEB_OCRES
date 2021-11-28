import React, { Component } from 'react';
import Wid1 from './Components/Wid1';
import Wid2 from './Components/Wid2';
import Wid3 from './Components/Wid3';
import Wid4 from './Components/Wid4';
import './App.css';

// Clé api
// 4081444b7b90198136fefe6ed4ccf35b
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
const API_KEY1 = "HGJWFG4N8AQ66ICD";
const API_KEY2 = "6e04df26939547e2b5603480d057621b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL1 = "https://www.alphavantage.co/query";
const API_URL2 ="https://newsapi.org/v2/top-headlines";

const StockSymbol = 'FB';
const city = "Paris";

class App extends Component {
  constructor(){
    super();

    let urlList = this.state = [
      {
        url: `${API_URL2}?country=us&category=business&apiKey=${API_KEY2}`,
      },
      {
        url: "https://jsonplaceholder.typicode.com/todos/2",
      },
      {
        url: "https://jsonplaceholder.typicode.com/todos/3",
      },
      {
        url: "https://jsonplaceholder.typicode.com/todos/4",
      },
      {
        url: `${API_URL1}?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY1}`,
      },
      {
        url: `${API_URL}?q=paris&units=metric&appid=${API_KEY}`,
      }
    ]
  }

  render(){
    return(
      <div>
        <h2 id='title'>Hello Widget</h2>
        <div className='grid-container'>
          <div className="box1 grid-items"><Wid1 url = {this.state[0].url} /></div>
          <div className="box2 grid-items"><Wid3 url = {this.state[1].url} />Meteo</div>
          <div className="box3 grid-items"><Wid2 url = {this.state[0].url} /></div>
          <div className="box4 grid-items"><Wid2 url = {this.state[0].url} /></div>
          <div className="box5 grid-items"><Wid2 url = {this.state[0].url} />Calendrier</div>
          <div className="box6 grid-items"><Wid4 url = {this.state[4].url} />Bourse</div>
        </div>
      </div>
    )
  }
}

export default App;