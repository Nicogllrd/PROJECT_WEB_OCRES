import React, { Component} from 'react';
import './Components/Widget.css';
import {Link} from "react-router-dom";

function Admin (props) {
    return(
      <div>
        <Link to="/">App</Link>
        Interface pour modifier notre widget meeting
      </div>
    )
  }
export default Admin;