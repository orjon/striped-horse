import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import NavToTop from './Nav/NavToTop';
import GetText from '../Helpers/GetText';
import SlideShow from './SlideShow';
import '../styles/About.scss'


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charles: [
        'CharlesThomas01',
        'CharlesThomas02',
        'CharlesThomas03',
        'CharlesThomas04'
      ],
      dilo: [
        'Dilo01'
      ]
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

          {/* <SectionSubTitle title='Charles Thomas' /> */}

          <div className='small flexColumn center indent20 textJustify'>
            <SlideShow slides={this.state.charles} path='about' speed='3500'/>
            <div className='textSize1 gap10'>
              <strong>Charles Thomas</strong>
              <GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
          </div>

          <div className='normal flexRow textSize0 indent20 textJustify'>
            <SlideShow slides={this.state.charles} path='about' speed='3500' />
            <div className='textSize1 gap10'>
              <strong>Charles Thomas</strong>
              <GetText file='about-01'/>
              <br /><br />
              <GetText file='about-02'/>
              <br /><br />
              <GetText file='about-03'/>
            </div>
          </div>

          {/* <SectionSubTitle title='Dilo Sá' /> */}

          <div className='small flexColumn center gap40 indent20 textJustify'>
            <SlideShow slides={this.state.dilo} path='about' speed='3500'/>
            <div className='textSize1 gap10'>
              <strong>Dilo Sá</strong>
              <GetText file='about-04'/>
              <br /><br />
              <GetText file='about-05'/>
              <br /><br />
              <GetText file='about-06'/>
            </div>
            <NavToTop />
          </div>

          <div className='normal flexRow textSize0  gap40 indent20 textJustify'>
            <SlideShow slides={this.state.dilo} path='about' speed='3500'/>
            <div className='textSize1 gap10'>
              <strong>Dilo Sá</strong>
              <GetText file='about-04'/>
              <br /><br />
              <GetText file='about-05'/>
              <br /><br />
              <GetText file='about-06'/>
            </div>
            <NavToTop />
          </div>

        </div>

      </div>
    )
  }
}

export default About;