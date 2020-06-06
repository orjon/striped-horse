import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import NavToTop from './NavToTop';
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
            <p className='gap10'>Charles Thomas is the founder and managing director of Striped Horse Resources Ltd. He has previously held international business development and leadership roles with EMGS ASA and Halliburton, where he spent 17 years working and living in various African locations including Lagos, Luanda, Cairo and Cape Town. In his early career, Charles spent two years as an offshore engineer with Halliburton Energy Services working in West Africa.<br /><br /> Charles graduated from the University of Liverpool with a joint honors degree in Physical Geology and Geomorphology (1994). He also holds a master’s degree in Petroleum Geoscience from Imperial College, London (1995). With 25 years of continuous industry experience, Charles has been involved in a wide variety of technical &amp; commercial upstream projects throughout Africa and has long established relationships with key African NOC’s, Ministries and Regulators.<br /><br />He declares himself an advocate of seeing life as an adventure. Each adventure is a chance to take in the view, change your thinking, learn something, explore the world, meet like-minded people &amp; have fun.</p>
            <NavToTop />
          </div>

          <p className='normal flexRow textSize0 indent40 textJustify'>
            <img src={require('../images/about/CharlesThomas01.jpg')} alt='Stop sign in the desert' className='w50 left' />
            Charles Thomas is the founder and managing director of Striped Horse Resources Ltd. He has previously held international business development and leadership roles with EMGS ASA and Halliburton, where he spent 17 years working and living in various African locations including Lagos, Luanda, Cairo and Cape Town. In his early career, Charles spent two years as an offshore engineer with Halliburton Energy Services working in West Africa.<br /><br /> Charles graduated from the University of Liverpool with a joint honors degree in Physical Geology and Geomorphology (1994). He also holds a master’s degree in Petroleum Geoscience from Imperial College, London (1995). With 25 years of continuous industry experience, Charles has been involved in a wide variety of technical &amp; commercial upstream projects throughout Africa and has long established relationships with key African NOC’s, Ministries and Regulators.<br /><br />He declares himself an advocate of seeing life as an adventure. Each adventure is a chance to take in the view, change your thinking, learn something, explore the world, meet like-minded people &amp; have fun.
          </p>

        </div>

      </div>
    )
  }
}

export default About;