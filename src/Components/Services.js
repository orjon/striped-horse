import React, { Component } from 'react';
import '../styles/Section.scss';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import NavToTop from './NavToTop';
import BlockImageText  from './BlockImageText';


class Services extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className='Services'>

        <SectionTitle title='Services' overlay={false}/>

        <div className='flexColumn textBlock indent40 gap10'>
        
          <p className='textSize0'>Ea nostrum expedita ab saepe odio ut nobis voluptates sit sequi tempora vel modi ipsum eum laborum nemo? Ut asperiores animi aut ullam blanditiis ad iure odio At necessitatibus omnis eos quia dolores ab maiores commodi et modi sapiente qui necessitatibus voluptatem. Et Quis obcaecati aut labore voluptatem eos voluptas velit. Vlanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi.</p>
        </div> 

        <div className='flexRow flexWrap indent40 gap10'>
        {/* <div className='gridContainer textBlock indent40 gap20'> */}

          <BlockImageText 
            // width='third'
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='services/A01.jpg'
            title='Business development support'
            text='With years of proven experience throughout Africa, we offer a full range of BD and sales &amp; marketing services to customers looking to expand their own range of services and products into Africa.'/>

          <BlockImageText 
            // width='third'
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='services/A02.jpg'
            title='Technical support to African partners and local content vehicles'
            text='Services specifically tailored to emerging and/or established local agents &amp; local content service providers based in Africa looking to expand and/or manage their own portfolio of  partner representation. This takes into account Geopolitical fluctuations, technical developments and the evolution of the oil field life cycle through time.'/>

          <BlockImageText 
            // width='third'
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='services/A03.jpg'
            title='Licensing round support &amp; promotion'
            text='Services associated with licensing round support and advisory to industry regulators, Ministries and National Oil Companies looking to host successful licensing round promotions.'/>

          <BlockImageText 
            // width='third'
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='services/A04.jpg'
            title='Geophysical &amp; geological multi-client campaign development'
            text='We offer a broad range of services associated with the planning &amp; development, commercialization and deliver of bespoke multi-client campaign solutions in Africa. In all cases, we seek to deliver a win-win solution for our customers, government, acquisition contractor &amp; local content providers, key to the successful delivery of multi-client data acquisition projects.'/>

          <BlockImageText 
            // width='third'
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='services/A05.jpg'
            title='Project management'
            text='Services associated with the planning of and management of upstream consulting projects, to facilitate the smooth execution of project scope results, on time and on budget. A key aim is to use the same language and processes in order to promote trust within well-functioning multi-disciplinary teams, common in the upstream sector.'/>

          <BlockImageText 
            // width='third'
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='services/A06.jpg'
            title='Technical onboarding campaign development and delivery'
            text='Tailored offering specifically to African NOC and Regulators looking to embark on multi-year technical onboarding initiatives and services for new-hires. Provides a method to accelerate levels of experience in a carefully designed, bespoke development programs.'/>

          <BlockImageText 
            // width='third'
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='services/A07.jpg'
            title='Local content &amp; community support '
            text='Services associated with the generation, monitoring and delivery of bespoke local content and community support initiatives throughout Africa.'/>

        </div>

        <SectionSubTitle subTitle='Adiure upiditate quia eligendi' />


        <div className='flexColumn textBlock indent40 gap10'>
          <p className='textSize0'>Eos veniam nemo eum impedit modi nam voluptatem repellat! Ea officiis obcaecati aut quae voluptate quo modi necessitatibus rem dignissimos deleniti et magnam quasi. Ad exercitationem dolorem non aspernatur molestiae non dolores repudiandae eos sint perferendis.</p>
          <br />
          <p className='textSize0'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor modi deleniti.</p>
        </div>

        <NavToTop />

      </div>
    )
  }
}
export default Services;

