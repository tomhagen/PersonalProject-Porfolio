// https://bridge236.qodeinteractive.com/#about

import React, { Component, Fragment } from 'react';
import './App.scss';
import Home from './components/home';
import Project from './components/project';
import AboutMe from './components/about-me';
import Cooperation from './components/cooperation';
import Clients from './components/clients';
import Social from './components/social';
import Award from './components/award';
import Contact from './components/contact-me';
import Copyright from './components/copyright';

function App() {
  return (
    <Fragment>

      <Home/>
      <Project/>
      <AboutMe/>
      <Cooperation/>
      <Clients/>
      <Social/>
      <Award/>
      <Contact/>
      <Copyright/>
    </Fragment>
  );
}

export default App;
