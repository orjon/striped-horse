import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import { default as IconEmail}  from '@material-ui/icons/EmailOutlined';
import { default as IconPhone} from '@material-ui/icons/Call';

import '../styles/Contact.scss';
import '../styles/Nav.scss';


class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className='Contact'>


        <SectionTitle title='Contact Details' />
        
        <div className='sectionContent h75 flexColumn textSize0 indent20 center w100'>

          <div className='address textCenter gap10'>
            <div className='LogoText'>Striped Horse Resources Limited</div>
            {/* <strong>Striped Horse Resources Limited</strong><br /> */}
            Oakdale, Farley, Shropshire.<br />
            TF13 6NX<br />
            United Kingdom<br />
          </div>


          <a href='mailto:enquiries@striped-horse.com' target='_blank' rel='noopener noreferrer' className='email flexRow middle gap10'>
            <IconEmail fontSize='small'/>&nbsp;enquiries@striped-horse.com
          </a>

          <a href='tel:+447436890478' className='phoneNo flexRow middle gap10'>
            <IconPhone fontSize='small'/>&nbsp;+44&nbsp;(0)743&nbsp;689&nbsp;0478
          </a>

          <div className='normal legal textSize2 textCenter gap10'>
            UK company registration number: 11132222<br />
            VAT registration number:  335 4802 08<br />
          </div>


          <div className='small legal textSize2 textCenter gap10'>
            UK registration: 11132222<br />
            VAT:  335 4802 08<br />
          </div>

        </div>

        <div className='orjon textSize2 flexColumn textCenter TextLink'>
          <a href='http://www.orjon.com/' className='flexRow middle gap10'>
            [ design + build : orjon ]
          </a>
          </div>
        
      </div>
    )
  }
}

export default Contact;




