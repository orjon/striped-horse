import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
  render(){
    return(
      <NavLink to={`/${this.props.to}`} className='navItem' activeClassName='selected'>
        <div>{this.props.to}</div>
      </NavLink>
    )
  }
}

export default NavItem;