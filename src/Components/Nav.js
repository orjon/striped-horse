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
      navLocations: ['services','partners', 'ethics', 'about', 'contact'],
      // navBurgerMenu: false
    }
    // this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this)
  }

  // toggleBurgerMenu() {
  //   let isOpen = !this.state.navBurgerMenu
  //   this.setState({ navBurgerMenu : isOpen })
  // }


  render(){
    let { navLocations} = this.state

    let navItems = navLocations.map(location => 
      <NavItem key={location} to={location}/>
    )

    return(
      <nav className='Nav w100 indent10 gap10'>
        <Logo />
        <div className='navItems'>
          {navItems}
          <div className='contactItems'>
            <a href='tel:+447848890660' className='navIcon'>
              <IconPhone fontSize='small'/>
            </a>
            <a href='mailto:contact@striped-horse.com' target='_blank'  rel='noopener noreferrer' className='navIcon'>
              <IconEmail fontSize='small'/>
            </a>
          </div>
        </div>
        <div className='navBurger'>
          <NavBurgerMenu navLocations={navLocations}/>
        </div>
      </nav>
    )
  }
}
export default Nav;