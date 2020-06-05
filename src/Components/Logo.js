import React, { Component } from 'react';
import LogoImage from '../images/logo/StripedHorseResources_LogoSML.png';
import { NavLink } from 'react-router-dom';
import '../styles/Logo.scss';

class Logo extends Component {
  render(){
    return(
      <div className='Logo'>
        <NavLink to={`/test/`} className='navItem' activeClassName='selected'>
          <div className='flexRow center'>
            <img className='LogoImage' src={LogoImage} alt='Striped Horse Resource Logo'/>
            <div className='LogoText'>Striped Horse Resources ltd</div>
          </div>
        </NavLink>
      </div> 
    )
  }
}


export default Logo;