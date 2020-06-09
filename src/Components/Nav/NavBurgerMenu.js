import React, { Component } from 'react';
import { default as IconNavBurger } from '@material-ui/icons/MenuRounded';
import { default as IconClose } from '@material-ui/icons/Close';
import NavItem from './NavItem';


class NavBurgerMenu extends Component {
  constructor(props){
    super(props);
    this.state= {
      menuOpen: false
      // timerRunning: false
    };
    this.handleClick=this.handleClick.bind(this);
    // this.startTimer=this.startTimer.bind(this);
  }



  handleClick() {
    // let { timerRunning } = this.state
    let isOpen = !this.state.menuOpen
    this.setState({ menuOpen : isOpen })
    
    // let menuTimer = setTimeout(() => {
    //   this.setState({ menuOpen: false});
    // }, 10000);
  }


  render(){

    let { menuOpen } = this.state
    let { navLocations } = this.props

    let navItems = navLocations.map(location => 
        <NavItem key={location} to={location} />
    )

    return (
      <div className='burgerMenu' >
        {menuOpen? 
          <div className='navIcon gap10'><IconClose onClick={this.handleClick}/></div>
           :
           <div className='navIcon gap10'><IconNavBurger onClick={this.handleClick}/></div>}
        {menuOpen? 
          <div className='burgerMenuList gap20' onClick={this.handleClick}>
            <div className='navIcon indent10'><IconClose onClick={this.handleClick}/></div>
            <div className='navItem indent40'>
              {navItems}
            </div>
          </div> : null }
        
      </div>
    );
  }

}

export default NavBurgerMenu;

