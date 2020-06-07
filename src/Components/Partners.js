import React, { Component } from 'react';
import '../styles/Partners.scss';
import { default as PartnerBlock }  from './BlockImageText';
import NavToTop from './Nav/NavToTop';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import GetText from '../Helpers/GetText';


class Partners extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render(){


    return(
      <div className='Partners'>
        <SectionTitle title='Our Partners' />


        <div className='flexColumn indent40'>

          <PartnerBlock
            orientation='flexRow'
            alignment='middle'
            link='http://www.emgs.com/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/EMGS.png'
            title={<GetText file='emgsTitle'/>}
            text={<GetText file='emgs'/>}
          />

          <PartnerBlock
            orientation='flexRow'
            alignment='middle'
            link='http://www.nventures.co.uk/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/NVentures.jpg'
            title={<GetText file='nventuresTitle'/>}
            text={<GetText file='nventures'/>}
          />

          <PartnerBlock
            orientation='flexRow'
            alignment='middle'
            link='https://promote-energy.com/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/PromoteEnergy.jpg'
            title={<GetText file='promoteEnergyTitle'/>}
            text={<GetText file='promoteEnergy'/>}
          />
          <PartnerBlock
            orientation='flexRow'
            alignment='middle'
            link='http://www.pveconsulting.co.uk/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/PVE.png'
            title={<GetText file='pveConsultingTitle'/>}
            text={<GetText file='pveConsulting'/>}
          />
        </div>

        <NavToTop />

        <SectionSubTitle subTitle='Option B' />

        <div className='flexRow flexWrap indent40 gap10'>

          <PartnerBlock
            orientation='flexColumn'
            alignment='middle'
            link='http://www.emgs.com/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/EMGS.png'
            title={<GetText file='emgsTitle'/>}
            text={<GetText file='emgs'/>}
          />

          <PartnerBlock
            orientation='flexColumn'
            alignment='middle'
            link='http://www.nventures.co.uk/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/NVentures.jpg'
            title={<GetText file='nventuresTitle'/>}
            text={<GetText file='nventures'/>}
          />

          <PartnerBlock
            orientation='flexColumn'
            alignment='middle'
            link='https://promote-energy.com/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/PromoteEnergy.jpg'
            title={<GetText file='promoteEnergyTitle'/>}
            text={<GetText file='promoteEnergy'/>}
          />
          <PartnerBlock
            orientation='flexColumn'
            alignment='middle'
            link='http://www.pveconsulting.co.uk/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/PVE.png'
            title={<GetText file='pveConsultingTitle'/>}
            text={<GetText file='pveConsulting'/>}
          />
        </div>

        <NavToTop />

      </div>
    )
  }
}

export default Partners;




