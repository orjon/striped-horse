import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
  render(){
    let { label }  = this.props

    let to = label

    if (label === 'home'){
      to = ''
    }


    return(
      <NavLink exact to={`/${to}`} className='navItem indent10' activeClassName='selected'>
        <div>{label}</div>
      </NavLink>
    )
  }
}

export default NavItem;

// About NavLink:  https://medium.com/swlh/using-react-router-navlink-to-specify-the-active-element-in-a-navigation-bar-38700ffd4900