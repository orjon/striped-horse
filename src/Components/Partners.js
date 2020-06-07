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

        <div className='flexColumn textBlock indent20 gap10'>
          <p className='textSize1'>Et Quis obcaecati aut labore voluptatem eos voluptas velit. Vlanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi.</p>
        </div> 

        <div className='flexRow flexWrap indent0'>

          <PartnerCard
            orientation='flexColumn'
            alignment='middle'
            link='http://www.emgs.com/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/EMGS.png'
            title={<GetText file='partner-emgsTitle'/>}
            text={<GetText file='partner-emgs'/>}
          />

          <PartnerCard
            orientation='flexColumn'
            alignment='middle'
            link='http://www.nventures.co.uk/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/NVentures.jpg'
            title={<GetText file='partner-nventuresTitle'/>}
            text={<GetText file='partner-nventures'/>}
          />

          <PartnerCard
            orientation='flexColumn'
            alignment='middle'
            link='https://promote-energy.com/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/PromoteEnergy.jpg'
            title={<GetText file='partner-promoteEnergyTitle'/>}
            text={<GetText file='partner-promoteEnergy'/>}
          />
          <PartnerCard
            orientation='flexColumn'
            alignment='middle'
            link='http://www.pveconsulting.co.uk/'
            textAlign='middle'
            titleAlign='textCenter'
            image='partners/PVE.png'
            title={<GetText file='partner-pveConsultingTitle'/>}
            text={<GetText file='partner-pveConsulting'/>}
          />
        </div>

        <NavToTop />

                {/* <div className='flexColumn indent40'>

          <PartnerCard
            orientation='flexRow'
            alignment='middle'
            link='http://www.emgs.com/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/EMGS.png'
            title={<GetText file='partner-emgsTitle'/>}
            text={<GetText file='partner-emgs'/>}
          />

          <PartnerCard
            orientation='flexRow'
            alignment='middle'
            link='http://www.nventures.co.uk/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/NVentures.jpg'
            title={<GetText file='partner-nventuresTitle'/>}
            text={<GetText file='partner-nventures'/>}
          />

          <PartnerCard
            orientation='flexRow'
            alignment='middle'
            link='https://promote-energy.com/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/PromoteEnergy.jpg'
            title={<GetText file='partner-promoteEnergyTitle'/>}
            text={<GetText file='partner-promoteEnergy'/>}
          />
          <PartnerCard
            orientation='flexRow'
            alignment='middle'
            link='http://www.pveconsulting.co.uk/'
            textAlign='middle'
            titleAlign='textLeft'
            image='partners/PVE.png'
            title={<GetText file='partner-pveConsultingTitle'/>}
            text={<GetText file='partner-pveConsulting'/>}
          />
        </div>

        <NavToTop /> */}

      </div>
    )
  }
}

export default Partners;




