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
    return (
        <div>Hello</div>        )
    }
}

export default Wid5;