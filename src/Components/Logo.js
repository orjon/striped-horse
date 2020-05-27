import React, { Component } from 'react';
import LogoImage from '../StripedHorseResourcesLogo.jpg';

class Logo extends Component {
  render(){
    return(
      <div className='Logo'>
        <img className='LogoImage' src={LogoImage} alt='Striped Horse Resource Logo'/>
        <div>Striped Horse Resources ltd</div>
      </div> 
    )
  }
}


export default Logo;