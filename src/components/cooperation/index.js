import './index.scss';

import React, { Component } from 'react'

class Cooperation extends Component {
    render() {
        return (
            <div className="cooperation__container">
                <img style={{ paddingLeft: '0' }} className="container-fluid" src="./img/h1-img-1.jpg" />
                <div className="img__overlay">
                    <h3>Cooperation <br/> With International <br/>Clients</h3>
                    <div className="underline"></div>
                    <div className="container wrap__number">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <p>112</p>
                                <p>Europe & International</p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <p>86</p>
                                <p>Europe & International</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cooperation