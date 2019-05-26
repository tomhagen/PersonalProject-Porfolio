import React, { Component, Fragment } from "react";
import './index.scss';

class Copyright extends Component {
  render() {
    return (
      <Fragment>
        <div className="copyright__wrap">
          <div className="copyright__container text-right">
            <span>Follow Me on Social:</span>
            <a><i class="fa fa-instagram"></i></a>
            <a><i class="fa fa-facebook-f"></i></a>
            <a><i class="fa fa-dribbble"></i></a>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Copyright;
