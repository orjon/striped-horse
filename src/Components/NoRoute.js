import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';

import '../styles/Contact.scss';


class NoRoute extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className='NoRoute'>
        <SectionTitle title='Error!' />
        
        <div className='h70 flexColumn textSize0 indent20 center w100'>

          <Link to={`/`} className='navItem' activeClassName='selected'>
            404 Page not found
          </Link>


            </div>
        
      </div>
    )
  }
}

export default NoRoute;


