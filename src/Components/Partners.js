import React, { Component } from 'react';
import '../styles/Partners.scss';
// import { default as PartnerBlock }  from './BlockImageText';
import PartnerCard  from './PartnerCard';
import NavToTop from './Nav/NavToTop';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import GetText from '../Helpers/GetText';
// import GetTextFile from '../Helpers/GetTextFile';


class Partners extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  

  render(){


    return(
      <div className='Partners'>

        <SectionTitle title='Our Partners' />

        <div className='sectionContent'>

          <div className='flexColumn textBlock indent20'>
            <div className='textSize1 textJustify'>
              <GetText file='partner-01'/>
            </div>
          </div> 

          <div className='flexRow flexWrap'>

            <PartnerCard
              link='http://www.emgs.com/'
              image='partners/EMGS.png'
              title={<GetText file='partner-emgsTitle'/>}
              text={<GetText file='partner-emgs'/>}
            />

            <PartnerCard
              link='http://www.nventures.co.uk/'
              image='partners/NVentures.jpg'
              title={<GetText file='partner-nventuresTitle'/>}
              text={<GetText file='partner-nventures'/>}
            />

            <PartnerCard
              link='https://promote-energy.com/'
              image='partners/PromoteEnergy.jpg'
              title={<GetText file='partner-promoteEnergyTitle'/>}
              text={<GetText file='partner-promoteEnergy'/>}
            />

            <PartnerCard
              link='http://www.pveconsulting.co.uk/'
              image='partners/PVE.png'
              title={<GetText file='partner-pveConsultingTitle'/>}
              text={<GetText file='partner-pveConsulting'/>}
            />
            
          </div>

        </div>

        

      </div>
    )
  }
}

export default Partners;




