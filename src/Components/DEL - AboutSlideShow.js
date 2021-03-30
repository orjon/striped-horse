import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import NavToTop from './Nav/NavToTop';
import GetText from '../Helpers/GetText';
import SlideShow from './SlideShow';
import SlideShowWithText from './SlideShowWithText';
import '../styles/About.scss'





class AboutSlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        slides: [
          '../images/about/CharlesThomas01.jpg',
          '../images/about/CharlesThomas02.jpg',
          '../images/about/CharlesThomas03.jpg'
        ],
        slidesA: [
          'CharlesThomas01',
          'CharlesThomas02',
          'CharlesThomas03'
        ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){

    let { slides } = this.state

    return(
      <div className='About'>

        <SectionTitle title='About2' />


        <div className='sectionContent center w100'>

        <div className='flexColumn center indent20 textJustify'>
            NEW
            {/* <SlideShow slides={this.state.slidesA} path='about' speed='3500' className='slides'/> */}
            <img src={require('../images/about/CharlesThomas01.jpg')} alt='Charles Thomas' className='w100' />
            <div className='textSize1 gap10'>
              [ SMALL ]<GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
            <NavToTop />
          </div>

          <div className='small flexColumn center indent20 textJustify'>
            <SlideShow slides={this.state.slidesA} path='about' speed='3500' className='slides'/>
            {/* <img src={require('../images/about/CharlesThomas01.jpg')} alt='Charles Thomas' className='w100' /> */}
            <div className='textSize1 gap10'>
              [ SMALL ]<GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
            <NavToTop />
          </div>

          <div className='normal flexRow textSize0 indent20 textJustify'>
            
            {/* <img src={require('../images/about/CharlesThomas01.jpg')} alt='Charles Thomas' className='left' /> */}

            <div className='textSize1'>
            <SlideShow slides={this.state.slidesA} path='about' speed='4000' className='slides left'/>
              [ NORMAL ]<GetText file='about-01'/>
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

export default AboutSlideShow ;