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


        <div className='sectionContent textBlock center w100'>

          <div className='small flexColumn center indent20 textJustify'>
            <img src={require('../images/about/CharlesThomas01.jpg')} alt='Stop sign in the desert' className='w100' />
            <div className='textSize1 gap10'>
              <GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
            <NavToTop />
          </div>

          <div className='normal flexRow textSize0 indent20 textJustify'>
            <img src={require('../images/about/CharlesThomas01.jpg')} alt='Stop sign in the desert' className='w50 left' />
            <div className='textSize1'>
              <GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default About;