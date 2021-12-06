import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Admin from './Admin';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
    <Router>
        <div className="body">
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </div>
        <div id="admin">
            <Routes>
                <Route path="/Admin" element={<Admin />} />
            </Routes>
        </div>
    </Router>

    </React.StrictMode>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
