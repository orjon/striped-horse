import React, { Component } from 'react';
import '../styles/Section.scss';
import SectionTitle from './SectionTitle';
import '../styles/About.scss'
// import SectionSubTitle from './SectionSubTitle';
// import NavToTop from './NavToTop';
// import BlockImageText from './BlockImageText';



class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){

    return(
      <div className='About'>

        <SectionTitle title='About Us' />

{/* 
        <div className='flexRow h50'>
          <div className='textBlock w50'>
            <div className='flexColumn textBlock indent40 gap10'>

            </div>
          </div>
          <div className='image-pipes w40'></div>
        </div> */}





        <div className='flexColumn textBlock indent40 gap10'>

          {/* < className='textSize1'>         */}
          {/* <div className='image-oilrig3 h20 flexColumn bottom'>
          <div className='flexRow textBlock indent10 gap10 overlayWhite'>
            <h2  className='w100'>Ad iure odio At necessitatibus omnis enim nam eligendi aspernatur aut nesciunt</h2>
          </div> */}
        {/* </div> */}
        <p className='textSize0 textJustify w100'>
          <img src={require('../images/about/CharlesThomas01.jpg')} alt='Charles Thomas' className='charles w50 left' />
          Charles Thomas is the founder and managing director of Striped Horse Resources Ltd. He has previously held international business development and leadership roles with EMGS ASA and Halliburton, where he spent 17 years working and living in various African locations including Lagos, Luanda, Cairo and Cape Town. In his early career, Charles spent two years as an offshore engineer with Halliburton Energy Services working in West Africa.<br /><br /> Charles graduated from the University of Liverpool with a joint honors degree in Physical Geology and Geomorphology (1994). He also holds a master’s degree in Petroleum Geoscience from Imperial College, London (1995). With 25 years of continuous industry experience, Charles has been involved in a wide variety of technical &amp; commercial upstream projects throughout Africa and has long established relationships with key African NOC’s, Ministries and Regulators.<br /><br />He declares himself an advocate of seeing life as an adventure. Each adventure is a chance to take in the view, change your thinking, learn something, explore the world, meet like-minded people &amp; have fun.
        </p>

        </div>

        {/* <SectionSubTitle subTitle='The Board' />
        <div className='flexRow flexWrap indent20'>
          <BlockImageText
            width='quarter'
            image='about/personMan1.png'
            title='Philip K. Dick'
            text='Corporis molestiae et quia nobis. Et omnis doloremque ad porro minima qui voluptatum consequatur.'
          />
          <BlockImageText
            width='quarter'
            image='about/personLady2.png'
            title='Beatrice Potter'
            text='Lorem ipsum, dolor sit amet sectetur pisicing elit. Eos quidem beatae et itaque explicabo et deserunt.'
          />
          <BlockImageText
            width='quarter'
            image='about/personMan2.png'
            title='Alex Garland'
            text='Sit aut quidem asperiores sunt est facere nesciunt aut recusandae. Id vero illo et aperiam temporibus.'
          />
          <BlockImageText
            width='quarter'
            image='about/personLady1.png'
            title='Ann Rand'
            text='Ut nobis dolore est autem. Qui dolore vitae a quod tempore.'
          />
        </div> */}

        {/* <SectionSubTitle subTitle='' />

        <div className='image02 h80 flexColumn center'>
          <div className='flexColumn textBanner w75 overlayWhite'>
            <h1>we expand your reach</h1>
            <p className='textSize0'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perferendis.
            </p>
          </div>
        </div>

        <NavToTop /> */}

      </div>
    )
  }
}

export default About;