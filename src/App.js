// import logo from './logo.svg';
import { Component } from 'react';
import './App.css'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import '@fortawesome/fontawesome-svg-core/styles.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// import Footer from './MyComponents/Footer';
// import Header from './MyComponents/Header';

import Aboutus from './MyComponents/Aboutus';
import Home from './MyComponents/Home';
import './Styles/global.css'


// library.add(fab);

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route path="/Aboutus">
            <Aboutus />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
    </Router>
    
    </>
  );
}

export default App