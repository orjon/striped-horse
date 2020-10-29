import React, { Component } from 'react';
import '../styles/Ethics.scss';
import SectionTitle from './SectionTitle';
import GetText from '../Helpers/GetText';

class Ethics extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const imageStopSign = require(`../images/ethics/ethics.jpg`);
    const imageQHSE = require(`../images/ethics/qhse.jpg`);

    return (
      <div className='Ethics'>
        <SectionTitle title='Ethics/QHSE' />

        <div className='sectionContent flexColumn h75 center w100'>
          <div className='small flexColumn center textSize1 indent20 textJustify '>
            <img
              src={imageStopSign}
              alt='Stop sign in the desert'
              className='w100'
            />
            <div className='gap10 flexColumn center'>
              <GetText file='ethics' />
              <a href='http://www.striped-horse.com/qhse/Striped Horse QHSE Policy.pdf'>
                <img
                  src={imageQHSE}
                  alt='QHSE document'
                  className='document center'
                />
              </a>
            </div>
          </div>

          <div className='normal flexRow middle textSize0 indent20 textJustify'>
            <img
              src={imageStopSign}
              alt='Stop sign in the desert'
              className='w50 right'
            />
            <div className='flexColumn center '>
              <GetText file='ethics' />
              <a href='http://www.striped-horse.com/qhse/Striped Horse QHSE Policy.pdf'>
                <img
                  src={imageQHSE}
                  alt='QHSE document'
                  className='document center'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ethics;
