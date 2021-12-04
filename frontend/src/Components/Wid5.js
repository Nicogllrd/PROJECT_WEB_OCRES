import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import './Widget.css';
import './news.css';

class Wid5 extends Component {
      state = {
        data: []
            }

    componentDidMount() {
        fetch(this.props.url)
        .then(data => data.json())
        .then(data => this.setState({data}))
    }

    componentDidUpdate() {
      console.log("The component just updated")
    }

    render() {
      console.log(this.state.data)
      const data = this.state.data;
      const dataList = this.state.data.context;

      if(data && dataList) {
        return (
          <div>
            <p>{dataList.timezone}</p>
          </div>
        )
      }else{
        return (<div>Loading...</div>)
      }
    }
}

export default Wid5;