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
              // Block Evaluation
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceI.jpg'
              title={<GetText file='serviceI-title'/>}
              text={<GetText file='serviceI-text'/>}/>

            <ServiceCard
              // Tech Support
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceF.jpg'
              title={<GetText file='serviceF-title'/>}
              text={<GetText file='serviceF-text'/>}/>
            
            <ServiceCard
              // Licensing 
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceC.jpg'
              title={<GetText file='serviceC-title'/>}
              text={<GetText file='serviceC-text'/>}/>

            <ServiceCard
              // Environmental
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceH.jpg'
              title={<GetText file='serviceH-title'/>}
              text={<GetText file='serviceH-text'/>}/>

            <ServiceCard
              // Geo
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceD.jpg'
              title={<GetText file='serviceD-title'/>}
              text={<GetText file='serviceD-text'/>}/>

            <ServiceCard
              //Business Dev
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceA.jpg'
              title={<GetText file='serviceA-title'/>}
              text={<GetText file='serviceA-text'/>}/>

            <ServiceCard
              // Upstream
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceJ.jpg'
              title={<GetText file='serviceJ-title'/>}
              text={<GetText file='serviceJ-text'/>}/>

            <ServiceCard
              // Project Management
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceE.jpg'
              title={<GetText file='serviceE-title'/>}
              text={<GetText file='serviceE-text'/>}/>

            <ServiceCard
              // Local content
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceG.jpg'
              title={<GetText file='serviceG-title'/>}
              text={<GetText file='serviceG-text'/>}/>

            <ServiceCard
              // Techsupport
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/serviceB.jpg'
              title={<GetText file='serviceB-title'/>}
              text={<GetText file='serviceB-text'/>}/>

          </div>

        </div>

  

        <NavToTop />

      </div>
    )
  }
}
export default Services;

