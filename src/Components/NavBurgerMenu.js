import React, { Component } from 'react';
import { default as IconNavBurger } from '@material-ui/icons/MenuRounded';
import { default as IconClose } from '@material-ui/icons/Close';
import NavItem from './NavItem';


class NavBurgerMenu extends Component {
  constructor(props){
    super(props);
    this.state= {
      menuOpen: false
    };
    this.handleClick=this.handleClick.bind(this);
  }



  handleClick() {
    let isOpen = !this.state.menuOpen
    this.setState({ menuOpen : isOpen })
  }

  render(){

    let { menuOpen } = this.state
    let { navLocations } = this.props

    let navItems = navLocations.map(location => 
        <NavItem key={location} to={location} />
    )

    return (
      <div className='burgerMenu'>
        {menuOpen? <IconClose onClick={this.handleClick}/> : <IconNavBurger onClick={this.handleClick}/>}
        {menuOpen? 
          <div className='burgerMenuItems indent1 gap2' onClick={this.handleClick}>
            {navItems}
          </div> : null}
        
      </div>
    );
  }

}

export default NavBurgerMenu;

