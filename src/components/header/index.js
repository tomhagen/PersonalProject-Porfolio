import React, { Component, Fragment } from "react";
import "./index.scss";

class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChangeBackground : false
    }
  }

  handleOnScroll = () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll > 100){
      this.setState({
        isChangeBackground : true
      })
    }
    else{
      this.setState({
        isChangeBackground : false
      })
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleOnScroll);
  }
  render() {
    // const activeClass = (route) => {
    //   return window.location.pathname === route ? "active" : ""
    // }

    return (
      <Fragment>
        <nav class={` navbar navbar-expand-md navbar-light fixed-top ${this.state.isChangeBackground ? "changeBg":""}`}>
          <a class="navbar-brand" href="#">
            <img src="./img/logo.png" />
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse myNav" id="collapsibleNavId">
            <ul class="navbar-nav ">
              <li class="nav-item hvr-shutter-out-horizontal">
                <a class="nav-link " href="#">
                  Home
                </a>
              </li>
              <li class="nav-item hvr-shutter-out-horizontal">
                <a class="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li class="nav-item hvr-shutter-out-horizontal">
                <a class="nav-link" href="#cooperation">
                  Cooperation
                </a>
              </li>
              <li class="nav-item hvr-shutter-out-horizontal">
                <a class="nav-link" href="#project">
                  Project
                </a>
              </li>
              <li class="nav-item hvr-shutter-out-horizontal">
                <a class="nav-link" href="#client">
                  Clients
                </a>
              </li>
              <li class="nav-item hvr-shutter-out-horizontal">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}
export default index;

// <nav className="navbar navbar-expand-lg d-flex">
//         <a className="navbar-brand" href="#">
//           <img className="container-fluid" src="./img/logo.png"/>
//         </a>
//         <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="collapsibleNavId">
//           <ul className="navbar-nav ml-auto mt-2 mt-lg-0 navbar__wrap">
//             <li className="nav-item hvr-shutter-out-horizontal">
//               <a className="nav-link" href="#">Home</a>
//             </li>
//             <li className="nav-item hvr-shutter-out-horizontal">
//               <a className="nav-link" href="#about">About Me</a>
//             </li>
//             <li className="nav-item hvr-shutter-out-horizontal">
//               <a className="nav-link" href="#">Project</a>
//             </li>
//             <li className="nav-item hvr-shutter-out-horizontal">
//               <a className="nav-link" href="#">Clients</a>
//             </li>
//             <li className="nav-item hvr-shutter-out-horizontal">
//               <a className="nav-link" href="#">Contact</a>
//             </li>

//           </ul>

//         </div>
//       </nav>
