// https://bridge236.qodeinteractive.com/#about

import React, { Component, Fragment } from 'react';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from './containers';

function App() {
  return (
   <BrowserRouter>
       <Fragment>
          <Route path="/" component={Index}/>
      </Fragment>
   </BrowserRouter>
  );
}

export default App;
