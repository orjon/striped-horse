import React, { Component } from 'react';
import { default as IconNavBurger } from '@material-ui/icons/MenuRounded';


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
    return (
      <div className='NavburgerMenu'>
        <IconNavBurger onClick={this.handleClick}/>
      </div>
    );
  }

}

export default NavBurgerMenu;

