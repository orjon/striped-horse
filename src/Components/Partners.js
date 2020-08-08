import React, { Component } from 'react';
import PartnerCard  from './PartnerCard';
import SectionTitle from './SectionTitle';
import GetText from '../Helpers/GetText';

import '../styles/Partners.scss';

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
              // link='http://www.emgs.com/'
              image='partners/Geode.jpg'
              title={<GetText file='partner-geodeTitle'/>}
              text={<GetText file='partner-geode'/>}
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

            <PartnerCard
              link='https://www.tsavooilfieldservices.com//'
              image='partners/Tsavo.png'
              title={<GetText file='partner-tsavoTitle'/>}
              text={<GetText file='partner-tsavo'/>}
            />
            
          </div>

        </div>

      </div>
    )
  }
}

export default Partners;




