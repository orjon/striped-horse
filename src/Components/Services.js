import React, { Component } from 'react';
import GetText from '../Helpers/GetText';
import SectionTitle from './SectionTitle';
import NavToTop from './Nav/NavToTop';
import ServiceCard  from './ServiceCard';

import '../styles/Services.scss';

class Services extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className='Services'>

        <SectionTitle title='Services' overlay={false}/>

        <div className='sectionContent'>

          <div className='flexColumn textBlock indent20'>
            <div className='textSize1 textJustify'>
              <GetText file='services-01'/>
            </div>
          </div> 

          <div className='flexRow flexWrap'>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceA.jpg'
              title={<GetText file='serviceA-title'/>}
              text={<GetText file='serviceA-text'/>}/>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceB.jpg'
              title={<GetText file='serviceB-title'/>}
              text={<GetText file='serviceB-text'/>}/>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceC.jpg'
              title={<GetText file='serviceC-title'/>}
              text={<GetText file='serviceC-text'/>}/>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceD.jpg'
              title={<GetText file='serviceD-title'/>}
              text={<GetText file='serviceD-text'/>}/>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceE.jpg'
              title={<GetText file='serviceE-title'/>}
              text={<GetText file='serviceE-text'/>}/>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceF.jpg'
              title={<GetText file='serviceF-title'/>}
              text={<GetText file='serviceF-text'/>}/>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceG.jpg'
              title={<GetText file='serviceG-title'/>}
              text={<GetText file='serviceG-text'/>}/>

          </div>

        </div>

  

        <NavToTop />

      </div>
    )
  }
}
export default Services;

