import React, { Component, Carousel } from 'react';
import './Widget.css';

class Wid1 extends Component {
    state = {
      data : []
    }
  
  componentDidMount(){
    //console.log(this.props.url);
    fetch(this.props.url)                           //On récupère les données de l'Url passée en props
    .then(data => data.json())                      //On les passe en format JSON
    .then(data => this.setState({data}))            //On les intègre dans nos state
  }

  componentDidUpdate() {
    console.log("The component just updated")
  }

  render(){
    const news=this.state.data;                               {/*On fixe nos données dans une constante news*/}
    if(news && news.articles){                                {/*On vérifie qu'on aie nos données souhaitées*/}
    return (
      <div className="row">
            
          <div className="col-md-4">
            <div className="card mdb-color lighten-2 text-center z-depth-2 border-0">
              <div className="card-body">
                <h2>{news.articles[0].title}</h2>             {/*News 1*/}
              </div>
              
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mdb-color lighten-2 text-center z-depth-2 border-0">
              <div className="card-body">
                <h2>{news.articles[1].title}</h2>               {/*News 2*/}
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card mdb-color lighten-2 text-center z-depth-2 border-0">
              <div className=" card-body">
                <h2>{news.articles[2].title}</h2>                 {/*News 3*/}
              </div>
            </div>
          </div>
          </div>
    )
  }
  else{                                                           {/*Si nos données ne sont pas présentes*/}
    return(<div>Loading...</div>)
  }
}

}
export default Wid1;


