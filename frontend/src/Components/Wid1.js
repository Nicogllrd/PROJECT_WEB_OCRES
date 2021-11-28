import React, { Component } from 'react';
import './Widget.css';

class Wid1 extends Component {
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
      const news = this.state.data;
     //console.log(news);
      //const icon = `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`;
      if(news && news.articles) {
        return (
          <div className="Widget wrapper">
            <div className="article"><h2>{news.articles[0].title}</h2></div>
            <div className="article"><h2>{news.articles[1].title}</h2></div>
            <div className="article"><h2>{news.articles[2].title}</h2></div>
            
          </div>
        )
      }else{
        return (<div>Loading...</div>)
      }
    }
}

export default Wid1;