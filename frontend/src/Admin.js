import React, { Component} from 'react';
import './Components/Widget.css';
import './Admin.css';
import {Link} from "react-router-dom";

function Admin (props) {
    return(
      <div>
        <Link to="/">App</Link>
        Interface pour modifier notre widget meeting
        <div id="Add">
          Ajoutez des rendez-vous à votre dashboard
          <form>
            <input type="text" placeholder="Date"/>
            <input type="text" placeholder="Lieu"/>
            <input type="submit" id="btn" value="Add" />
          </form>
        </div>
        <div id="delete">
          Supprimez des rendez-vous de votre dashboard
          <form>
            <input type="text" placeholder="Date"/>
            <input type="text" placeholder="Lieu"/>
            <input type="submit" id="btn" value="Delete" />
          </form>
        </div>
      </div>
    )
  }
export default Admin;