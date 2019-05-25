import React, { Component } from 'react'
import './index.scss';
import Header from '../header';
import AOS from 'aos';

class index extends Component {
    render() {
        return (
            <div className="home__container">
                <Header />
                <div className="home__container__left">
                    <div className="left__title" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="50">
                        <h2 className="">
                            <span style={{ color: '#53F6C7' }}> &lt;b&gt;</span> Hello <span style={{ color: '#53F6C7' }}>&lt;b&gt;</span>
                            <br />
                            <span style={{ color: '#53F6C7' }}>I'm Max,</span> Full-stack
                            <br />
                            Web Developer
                        </h2>
                    </div>
                    <div className="left__content" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="250">
                        <p>A WordPress website about Hypergiant company which creates hyper-efficient and scalable. The careful have the as a spirits and client ihave by assistant have took initial sentences omens.</p>
                    </div>
                    <div className="left__hiring" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="1500" data-aos-delay="350">
                        <p>If You Want To Hire Me</p>
                        <p>Scroll Down</p>
                        <i class="fa fa-long-arrow-down"></i>
                    </div>
                </div>
                <div className="home__container__right" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="500" data-aos-delay="550">
                    <img className="container-fluid" src="./img/h1-img-2.jpg"/>
                </div>
            </div>
        )
    }
}
export default index