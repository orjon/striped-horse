import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
  render(){
    let { to }  = this.props

    let link = to

    if (link === 'home'){
      link = ''
    }


    return(
      <NavLink exact to={`/${link}`} className='navItem indent10' activeClassName='selected'>
        <div>{to}</div>
      </NavLink>
    )
  }
}

export default NavItem;

// About NavLink:  https://medium.com/swlh/using-react-router-navlink-to-specify-the-active-element-in-a-navigation-bar-38700ffd4900