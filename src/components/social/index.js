import './index.scss';

import React, { Component } from 'react'

class Social extends Component {
    render() {
        return (
            <div className="social__container">
                <div className="wrap__text">
                    <h3>The Best Site <br /> Of The Day for Weather <br />Conditions</h3>
                    <div className="underline"></div>
                    <div className="wrap__text__content">
                        <ul>
                            <div className="icon__list">
                                <i class="fa fa-circle"></i>
                                <li>SEO</li>
                            </div>
                            <div className="icon__list">
                                <i class="fa fa-circle"></i>
                                <li>Social media enhancements</li>
                            </div>
                            <div className="icon__list">
                                <i class="fa fa-circle"></i>
                                <li>General web marketing</li>
                            </div>
                            <div className="icon__list">
                                <i class="fa fa-circle"></i>
                                <li>Mobile App</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="wrap__img">
                    <img  src="./img/h-video-box.jpg" />
                    <span className="circle__center">
                        <span className="rec__center"></span>
                    </span>
                </div>
                
            </div>
        )
    }
}
export default Social