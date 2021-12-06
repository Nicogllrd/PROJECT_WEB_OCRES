import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import './Widget.css';
import './news.css';

class Wid4 extends Component {
      state = {
        lieu: [],
        XValues: [],
        YValues: []
        }

    componentDidMount() {
        this.fetch();                                       //On appelle la méthode fetch suivante
    }
    
    fetch() {
      const pointerToThis = this;
      let XValuesFunction = [];
      let YValuesFunction = [];
      let place = [];

      fetch(this.props.url)                                  //On récupère notre url en props
        .then(response => response.json())                   //On récupère nos données
        .then(data => {
            place.push(data['Meta Data']['2. Symbol']);      //On parcourt le JSON pour récupérer le symbole
            pointerToThis.setState({                         //On attribue à nos states une nouvelle valeur tirée de notre API
              lieu: place
            });

            for (var key in data['Time Series (Daily)']){
              if(key > "2021-11-01"){                         //Toutes nos données inférieures à début novembre ne sont pas prises en compte
                XValuesFunction.push(key);
                YValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
              }
          
              pointerToThis.setState({                        //On attribue à nos states une nouvelle valeur tirée de notre API
                XValues: XValuesFunction,
                YValues: YValuesFunction,
              });
            }
        }
        )
    }

    componentDidUpdate() {
      console.log("The component just updated")
    }
    
    render() {
    return (
        <div className="Widget">
            <div>
                <h1>Marché boursier de : {this.state.lieu}</h1>
                <Plot                                           //Utilisation de la librairie Plotly pour générer un graphique
                data={[                                        //On rempli notre graphique avec les données de nos states
                    {
                    x: this.state.XValues,
                    y: this.state.YValues,
                    type: 'log',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                    }
                ]}
                layout={{width: 450, height: 400, scrollZoom: true}}          //On regle les dimensions du graphique
                />
            </div>
        </div>
        )
    }
}

export default Wid4;