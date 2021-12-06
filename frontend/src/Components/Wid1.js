import React, { Component, Carousel } from 'react';
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
    const news=this.state.data;
    if(news && news.articles){
    return (
      <div className="row">
            
          <div className="col-md-4">
            <div className="card mdb-color lighten-2 text-center z-depth-2 border-0">
              <div className="card-body">
                <h2>{news.articles[0].title}</h2>             {/*News 1*/}
                {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
              </div>
              
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mdb-color lighten-2 text-center z-depth-2 border-0">
              <div className="card-body">
                <h2>{news.articles[1].title}</h2>               {/*News 2*/}
                {/*} <a href="#" class="btn btn-primary">Go somewhere</a>*/}
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card mdb-color lighten-2 text-center z-depth-2 border-0">
              <div className=" card-body">
                <h2>{news.articles[2].title}</h2>                 {/*News 3*/}
                {/*} <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          </div>
    )
  }
  else{
    return(<div>Loading...</div>)
  }
}

}
export default Wid1;


