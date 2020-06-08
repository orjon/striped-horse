import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import NavToTop from './Nav/NavToTop';
import GetText from '../Helpers/GetText';
import SlideShow from './SlideShow';
import '../styles/About.scss'


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        slidesA: ['CharlesThomas01','CharlesThomas02','CharlesThomas03']
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){

    return(
      <div className='About'>

        <SectionTitle title='About' />

        {/* <div className='flexColumn w100 center indent40 gap10'>
          <div className='w50'>
            <SlideShow slides={this.state.slidesA} path='about' speed='4000'/>
          </div>
        </div> */}


        <div className='sectionContent textBlock center w100'>

          <div className='small flexColumn center indent20 textJustify'>
            <SlideShow slides={this.state.slidesA} path='about' speed='3500' className='slides'/>
            {/* <img src={require('../images/about/CharlesThomas01.jpg')} alt='Charles Thomas' className='w100' /> */}
            <div className='textSize1 gap10'>
              <GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
            <NavToTop />
          </div>

          {/* <div className='normal flexRow textSize0 indent20 textJustify'> */}
            
            {/* <img src={require('../images/about/CharlesThomas01.jpg')} alt='Charles Thomas' className='left' /> */}

            {/* <div className='textSize1'>
            <SlideShow slides={this.state.slidesA} path='about' speed='4000' className='slides left'/>
              <GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
          </div> */}

        </div>

      </div>
    )
  }
}

export default About;