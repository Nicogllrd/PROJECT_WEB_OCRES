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
          <div class="row">
    <div class="col-md-4">
        <div class="card mdb-color lighten-2 text-center z-depth-2 border-0">
            <div class="card-body">
            <h2>{news.articles[0].title}</h2>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card mdb-color lighten-2 text-center z-depth-2 border-0">
                <div class="card-body">
                <h2>{news.articles[1].title}</h2>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    </div>
    <div class="col-md-4">
        <div class="card mdb-color lighten-2 text-center z-depth-2 border-0">
            <div class="card-body">
            <h2>{news.articles[2].title}</h2>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>
        )
      }else{
        return (<div>Loading...</div>)
      }
    }
}

export default Wid1;


