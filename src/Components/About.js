import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import NavToTop from './Nav/NavToTop';
import GetText from '../Helpers/GetText';
import '../styles/About.scss'


class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){

    return(
      <div className='About'>

        <SectionTitle title='About Us' />


        <div className='textBlock center w100'>


          <div className='small flexColumn center textSize1 indent40 textJustify'>
            <img src={require('../images/about/CharlesThomas01.jpg')} alt='Stop sign in the desert' className='w100' />
            <div className='gap10'>
              <GetText file='about01'/>
              <br /><br />
              <GetText file='about02'/>
              <br /><br />
              <GetText file='about03'/>
            </div>
            <NavToTop />
          </div>

          <div className='normal flexRow textSize0 indent40 textJustify'>
            <img src={require('../images/about/CharlesThomas01.jpg')} alt='Stop sign in the desert' className='w50 left' />
            <GetText file='about01'/>
            <br /><br />
            <GetText file='about02'/>
            <br /><br />
            <GetText file='about03'/>
          </div>

        </div>

      </div>
    )
  }
}

export default About;