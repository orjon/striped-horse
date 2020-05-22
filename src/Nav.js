import React, { Component } from 'react';
import Logo from './Logo';
import NavButton from './NavButton';
import './styles/Nav.scss';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      navLocations: ['Services','About', 'Partners', 'Ethics', 'Contact']
    }
  }

  
  render(){
    const { navLocations } = this.state

    let navButtons = navLocations.map(location => 
      <NavButton key={location} to={location}/>
    )


    return(
      <nav className='Nav w100'>
        <Logo />
        <div className='navButtons'>
          {navButtons}

        </div>
      </nav>
    )
  }
}
export default Nav;



// About NavLink:  https://medium.com/swlh/using-react-router-navlink-to-specify-the-active-element-in-a-navigation-bar-38700ffd4900