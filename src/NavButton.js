import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavButton extends Component {
  render(){
    return(
      <NavLink to={`/${this.props.to}`} className='navButton' activeClassName='selected'>
        <div>{this.props.to}</div>
      </NavLink>
    )
  }
}

export default NavButton;