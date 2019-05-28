import './index.scss';
import React, { Component } from 'react'
import wow from 'wow.js';

 class index extends Component {
  render() {
    return (
      <div className="project__container" id="project">
            <div className="wrap__text">
                <p> &lt;projects &gt;</p>
            </div>
            <div className="wrap__img mx-auto">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 wow bounceIn" >
                        <div className="wrap__img__left">
                            <a>
                                <img className="container-fluid " src="./img/01.jpg"/>
                            </a>
                            
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" >
                        <div className="wrap__img__right ">
                        <a>
                            <img className="container-fluid" src="./img/02.jpg" data-aos="fade-up"  data-aos-anchor-placement="center-bottom"  data-aos-duration="1500" data-aos-delay="350"/>
                        </a>
                        <a style={{marginTop:'86px'}}>
                             <img className="container-fluid" src="./img/03.jpg" data-aos="fade-up"  data-aos-anchor-placement="center-bottom"  data-aos-duration="2500" data-aos-delay="550"/> 
                        </a>
                            
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
export default index