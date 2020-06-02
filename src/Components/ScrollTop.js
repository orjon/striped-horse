import React, { Component } from 'react';
import { default as IconNavUp} from '@material-ui/icons/KeyboardArrowUp';


class ScrollTop extends Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <div className='flexRow center gap2' 
               onClick={ () => { this.scrollToTop(); }}>
                <IconNavUp />
              </div>;
   }
} 

export default ScrollTop;



