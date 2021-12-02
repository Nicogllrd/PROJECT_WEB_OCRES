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
        this.fetch();
    }
    
    fetch() {
      const pointerToThis = this;
      //console.log(pointerToThis);
      let XValuesFunction = [];
      let YValuesFunction = [];
      let place = [];
      //console.log(this.props.url)

      fetch(this.props.url)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            place.push(data['Meta Data']['2. Symbol']);
            pointerToThis.setState({
              lieu: place
            });

            for (var key in data['Time Series (Daily)']){
              if(key > "2021-11-01"){
                XValuesFunction.push(key);
                YValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                //console.log(key);
              }
          
              // console.log(stockChartXValuesFunction);
              pointerToThis.setState({
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
                <Plot
                data={[
                    {
                    x: this.state.XValues,
                    y: this.state.YValues,
                    type: 'log',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                    }
                ]}
                layout={{width: 450, height: 400, scrollZoom: true}}
                />
            </div>
        </div>
        )
    }
}

export default Wid4;