import React, { Component } from 'react'
import './index.scss';

class index extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg d-flex">
        <a className="navbar-brand" href="#">
          <img className="container-fluid" src="./img/logo.png"/>
        </a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navbar__wrap">
            <li className="nav-item hvr-shutter-out-horizontal">
              <a className="nav-link" href="#">Home</a>
            </li>  
            <li className="nav-item hvr-shutter-out-horizontal">
              <a className="nav-link" href="#">About Me</a>
            </li>
            <li className="nav-item hvr-shutter-out-horizontal">
              <a className="nav-link" href="#">Project</a>
            </li>
            <li className="nav-item hvr-shutter-out-horizontal">
              <a className="nav-link" href="#">Clients</a>
            </li>
            <li className="nav-item hvr-shutter-out-horizontal">
              <a className="nav-link" href="#">Contact</a>
            </li>
          
          </ul>
         
        </div>
      </nav>

    )
  }
}
export default index