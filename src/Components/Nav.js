import React, { Component } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import '../styles/Nav.scss';
import { default as IconEmail}  from '@material-ui/icons/EmailOutlined';
import { default as IconPhone} from '@material-ui/icons/Call';
import NavBurgerMenu from './NavBurgerMenu';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      navLocations: ['Services','Partners', 'Ethics', 'About', 'Contact']
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
          <div className='contactItems'>
            <a href='tel:+447848890660'>
              <IconPhone fontSize='small' className='contactItem'/>
            </a>
            <a href='mailto:contact@striped-horse.com'>
              <IconEmail fontSize='small' className='contactItem'/>
            </a>
          </div>
        </div>
        <div className='navBurger'>
          <NavBurgerMenu />
        </div>
      </nav>
    )
  }
}
export default Nav;