import React, { Component, Fragment} from 'react'
import './index.scss';

class BackToTop extends Component {

    constructor(props){
        super(props);
        this.state = {
            isActive : false
        }
    }

    handleOnScroll = () => {
        const currentScroll = window.pageYOffset;
        if(currentScroll > 400){
            this.setState({
                isActive : true
            })
        }
        else{
            this.setState({
                isActive : false
            })
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleOnScroll);
    }
    render() {
        return (
           <Fragment>
              <a href="#" className={`back-to-top ${this.state.isActive ? "active":""}`}>
                    <div className="circle text-center"><i class="fa fa-arrow-up"></i></div>
              </a>
           </Fragment>
        )
    }
}
export default BackToTop