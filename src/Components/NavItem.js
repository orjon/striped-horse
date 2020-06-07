import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
  render(){
    let location = this.props.to


    return(
      <NavLink to={`/test2/${location}`} className='navItem indent10' activeClassName='selected'>
        <div>{this.props.to}</div>
      </NavLink>
    )
  }
}

export default NavItem;

// About NavLink:  https://medium.com/swlh/using-react-router-navlink-to-specify-the-active-element-in-a-navigation-bar-38700ffd4900