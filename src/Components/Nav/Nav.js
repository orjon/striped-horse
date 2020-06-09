import React, { Component } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import '../../styles/Nav.scss';
import { default as IconEmail}  from '@material-ui/icons/EmailOutlined';
import { default as IconPhone} from '@material-ui/icons/Call';
import NavBurgerMenu from './NavBurgerMenu';
// import ComponentSize from '../Helpers/ComponentSize';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      navLocations: [
        'home',
        'services',
        'partners',
        'about',
        'ethics',
        'contact'
      ]
    }
  }

  render(){
    let { navLocations} = this.state

    let navItems = navLocations.map(location => 
      <NavItem key={location} to={location}/>
    )

    return(
      <nav className='Nav w100 indent10 gap10'>
        {/* <ComponentSize /> */}
        <Logo />
        <div className='navItems'>
          {navItems}
          <div className='contactItems'>
            <a href='tel:+447436890478' className='navIcon indent10'>
              <IconPhone fontSize='small'/>
            </a>
            <a href='mailto:contact@striped-horse.com' target='_blank'  rel='noopener noreferrer' className='navIcon indent10'>
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