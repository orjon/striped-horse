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

        <div className='sectionContent'>

          <div className='small flexColumn center indent20 textJustify'>
            <SlideShow slides={this.state.slidesA} path='about' speed='3500'/>
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

            <div className='textSize1'>
              <SlideShow slides={this.state.slidesA} path='about' speed='4000' />
              <div className='textSize1 gap10'>
                <GetText file='about-01'/>
                <br /><br />
                <GetText file='about-02'/>
                <br /><br />
                <GetText file='about-03'/>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default About;