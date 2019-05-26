import React, { Component, Fragment } from "react";
import "./index.scss";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="contact__container">
          <div className="wrap__text">
            <p> &lt; contact me &gt; </p>
          </div>
          <div
            className="row"
            style={{ marginRight: "0px", marginLeft: "0px" }}
          >
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="hire__me">
                <h3>
                  Hire Me <br /> For The Next <br /> Projects
                </h3>
                <div className="underline" />
                <p className="hire__me__content">
                  In mattis tincidunt quam non fermentum. Fusce fermentum massa
                  tortor, ineuismod mauris placerat quis. Integer porta porte
                  nume lorem nisi, quis ultricies nisi imperdiet vitae. Fusce
                  fermentum massa tortor
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wrap__form">
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name:*" required/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address:*" required/>
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" placeholder="Text Message:*" required/>
                  </div>
                  <button type="submit" className="btn btn--send">
                        Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Contact;
