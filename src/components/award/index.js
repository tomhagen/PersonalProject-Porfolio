import React, { Component, Fragment } from "react";
import "./index.scss";

class Award extends Component {
  render() {
    return (
      <Fragment>
        <div className="award__container">
          <div className="wrap__text">
            <p> &lt;awards &gt;</p>
          </div>

          <div className="slick__container">
            <div id="demo" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo" data-slide-to={2} />
              </ul>
              {/* The slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active text-center">
                  <div className="item__container">
                    <img src="./img/t-1.png" className="item__img" />
                    <p className="item__comment">
                      In mattis tincidunt quam non fermentum. Fusce fermentum
                      massa tortor, ineuismod mauris placerat quis. Integer
                      porta porte nume lorem nisi, quis ultricies nisi imperdiet
                      vitae.
                    </p>
                    <p className="item__author">- Mark Sellers</p>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="item__container">
                    <img src="./img/t-2.png" className="item__img" />
                    <p className="item__comment">
                      In mattis tincidunt quam non fermentum. Fusce fermentum
                      massa tortor, ineuismod mauris placerat quis. Integer
                      porta porte nume lorem nisi, quis ultricies nisi imperdiet
                      vitae.
                    </p>
                    <p className="item__author">- Ellie Watson</p>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="item__container">
                    <img src="./img/t-3.png" className="item__img" />
                    <p className="item__comment">
                      In mattis tincidunt quam non fermentum. Fusce fermentum
                      massa tortor, ineuismod mauris placerat quis. Integer
                      porta porte nume lorem nisi, quis ultricies nisi imperdiet
                      vitae.
                    </p>
                    <p className="item__author">- Bert Lee</p>
                  </div>
                </div>
              </div>
              {/* Left and right controls */}
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Award;
