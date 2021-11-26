import React, { Component } from 'react';
import Wid1 from './Components/Wid1';
//import Wid2 from '../Components/Wid2';
import Wid3 from './Components/Wid3';
import './App.css';

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon


class App extends Component {
  constructor(){
    super();

    let urlList = this.state = [
      {
        url: "https://jsonplaceholder.typicode.com/todos/2",
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
        url: "https://jsonplaceholder.typicode.com/todos/5",
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
          <Wid1 url = {this.state[0].url} />
          <Wid3 url = {this.state[5].url} />
        </div>
      </div>
    )
  }
}

export default App;