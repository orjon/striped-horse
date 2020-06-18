import React, { Component } from 'react';
import '../styles/Ethics.scss';
import SectionTitle from './SectionTitle';
import GetText from '../Helpers/GetText';

class Ethics extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){

    const imagePath = require(`../images/ethics/ethics.jpg`)


    return(
      <div className='Ethics'>

        <SectionTitle title='Ethics' />



        <div className='sectionContent flexColumn h75 center w100'>

          <div className='small flexColumn center textSize1 indent20 textJustify '>
            <img src={imagePath} alt='Stop sign in the desert' className='w100' />
            <div className='gap10'>
              <GetText file='ethics'/>
            </div>
          </div>

          <div className='normal flexRow middle textSize0 indent20 textJustify'>
            <img src={imagePath} alt='Stop sign in the desert' className='w50 right' />
            <div className=''>
              <GetText file='ethics'/>
            </div>
          </div>

        </div>




        


      </div>
    )
  }
}

export default Ethics;