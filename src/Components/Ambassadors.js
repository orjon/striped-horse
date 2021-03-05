import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import NavToTop from './Nav/NavToTop';
import GetText from '../Helpers/GetText';
import '../styles/Ambassadors.scss';

class Ambassadors extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const imageAhmad = require(`../images/ambassadors/ahmad.jpg`);
    const imageTako = require(`../images/ambassadors/tako.jpg`);

    return (
      <div className='Ambassadors'>
        <SectionTitle title='Company Ambassadors' />

        <div className='sectionContent'>
          <div className='flexColumn textBlock indent20'>
            <div className='textSize1 textJustify'>
              <GetText file='ambassadors-intro' />
            </div>
          </div>

          <div className='small flexColumn center gap40 indent20 textJustify'>
            <img
              src={imageTako}
              alt='Tako document'
              className='document center'
            />
            <div className='textSize1 gap10'>
              <strong>Tako Koning </strong>
              <GetText file='ambassadors-tako' />
              <br />
              <strong>B.Sc. Geology. University of Alberta. (1971)</strong>
              <br />
              <strong>B.A. Economics. University of Calgary. (1981)</strong>
            </div>
          </div>

          <div className='normal flexRow textSize0  gap40 indent20 textJustify'>
            <img
              src={imageTako}
              alt='QHSE document'
              className='document center'
            />
            <div className='textSize1 gap10'>
              <strong>Tako Koning </strong>
              <GetText file='ambassadors-tako' />
              <br />
              <strong>B.Sc. Geology. University of Alberta. (1971)</strong>
              <br />
              <strong>B.A. Economics. University of Calgary. (1981)</strong>
            </div>
          </div>

          <div className='small flexColumn center gap40 indent20 textJustify'>
            <img
              src={imageAhmad}
              alt='QHSE document'
              className='document center'
            />
            <div className='textSize1 gap10'>
              <strong>Ahmad Maidinsar </strong>
              <GetText file='ambassadors-ahmad' />
              <br />
              <strong>
                B.Sc. Physics. University of Sains, Malaysia. (1982)
              </strong>
              <br />
              <strong>
                PostGrad Dip in Systems Analysis (IT) University of Aston,
                Birmingham. UK. (1983)
              </strong>
            </div>
            <NavToTop />
          </div>

          <div className='normal flexRow textSize0  gap40 indent20 textJustify'>
            <img
              src={imageAhmad}
              alt='QHSE document'
              className='document center'
            />
            <div className='textSize1 gap10'>
              <strong>Ahmad Maidinsar </strong>
              <GetText file='ambassadors-ahmad' />
              <br />
              <strong>
                B.Sc. Physics. University of Sains, Malaysia. (1982)
              </strong>
              <br />
              <strong>
                PostGrad Dip in Systems Analysis (IT) University of Aston,
                Birmingham. UK. (1983)
              </strong>
            </div>
            <NavToTop />
          </div>
        </div>
      </div>
    );
  }
}

export default Ambassadors;

//

//
