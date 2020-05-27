import React, { Component } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import '../styles/Nav.scss';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      navLocations: ['Services','About', 'Partners', 'Ethics', 'Contact']
    }
  }

  
  render(){
    const { navLocations } = this.state

    let navItems = navLocations.map(location => 
      <NavItem key={location} to={location}/>
    )


    return(
      <nav className='Nav w100'>
        <Logo />
        <div className='navItems'>
          {navItems}

        </div>
      </nav>
    )
  }
}
export default Nav;



// About NavLink:  https://medium.com/swlh/using-react-router-navlink-to-specify-the-active-element-in-a-navigation-bar-38700ffd4900