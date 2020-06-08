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
              image='services/A01.jpg'
              title='Business development support'
              text='With years of proven experience throughout Africa, we offer a full range of BD and sales &amp; marketing services to customers looking to expand their own range of services and products into Africa.'/>

            <ServiceCard
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/A02.jpg'
              title='Technical support to African partners and local content vehicles'
              text='Services specifically tailored to emerging and/or established local agents &amp; local content service providers based in Africa looking to expand and/or manage their own portfolio of  partner representation. This takes into account Geopolitical fluctuations, technical developments and the evolution of the oil field life cycle through time.'/>

            <ServiceCard 
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/A03.jpg'
              title='Licensing round support &amp; promotion'
              text='Services associated with licensing round support and advisory to industry regulators, Ministries and National Oil Companies looking to host successful licensing round promotions.'/>

            <ServiceCard 
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/A04.jpg'
              title='Geophysical &amp; geological multi-client campaign development'
              text='We offer a broad range of services associated with the planning &amp; development, commercialization and deliver of bespoke multi-client campaign solutions in Africa. In all cases, we seek to deliver a win-win solution for our customers, government, acquisition contractor &amp; local content providers, key to the successful delivery of multi-client data acquisition projects.'/>

            <ServiceCard 
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/A05.jpg'
              title='Project management'
              text='Services associated with the planning of and management of upstream consulting projects, to facilitate the smooth execution of project scope results, on time and on budget. A key aim is to use the same language and processes in order to promote trust within well-functioning multi-disciplinary teams, common in the upstream sector.'/>

            <ServiceCard 
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/A06.jpg'
              title='Technical onboarding campaign development and delivery'
              text='Tailored offering specifically to African NOC and Regulators looking to embark on multi-year technical onboarding initiatives and services for new-hires. Provides a method to accelerate levels of experience in a carefully designed, bespoke development programs.'/>

            <ServiceCard 
              orientation='flexColumn'
              alignment='middle'
              titleAlign='textCenter'
              image='services/A07.jpg'
              title='Local content &amp; community support '
              text='Services associated with the generation, monitoring and delivery of bespoke local content and community support initiatives throughout Africa.'/>

          </div>

        </div>

  

        <NavToTop />

      </div>
    )
  }
}
export default Services;

