import React, { Component } from 'react';
import ScrollTop from './ScrollTop';
import '../styles/Nav.scss';



class NavToTop extends Component {
  render(){
    return(
      <div className='scrollUp flexRow w100 center'>
        <ScrollTop scrollStepInPx="50" delayInMs="16.66"/>
      </div>
    )
  }
}
export default NavToTop;