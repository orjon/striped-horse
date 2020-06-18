import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import { default as IconEmail}  from '@material-ui/icons/EmailOutlined';
import { default as IconPhone} from '@material-ui/icons/Call';
import GetText from '../Helpers/GetText';

import '../styles/Contact.scss';
import '../styles/Nav.scss';


class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){


    const address01 = <GetText file='contact-Address01'/>
    const address02 = <GetText file='contact-Address02'/>
    const address03 = <GetText file='contact-Address03'/>
    const address04 = <GetText file='contact-Address04'/>
    const email = <GetText file='contact-Email'/>
    const telephone = <GetText file='contact-Telephone'/>
    const regLong = <GetText file='contact-CompanyNoLong'/>
    const regShort = <GetText file='contact-CompanyNoShort'/>
    const VATLong = <GetText file='contact-VATLong'/>
    const VATShort = <GetText file='contact-VATShort'/>


    return(
      <div className='Contact'>


        <SectionTitle title='Contact Details' />
        
        <div className='sectionContent h75 flexColumn textSize0 indent20 center w100'>

          <div className='address textCenter gap10'>
            <div className='LogoText'>{address01}</div>
            {address02}<br />
            {address03}<br />
            {address04}<br />
          </div>


          <a href='mailto:enquiries@striped-horse.com' target='_blank' rel='noopener noreferrer' className='email flexRow middle gap10'>
            <IconEmail fontSize='small'/>&nbsp;{email}
          </a>

          <a href='tel:+447436890478' className='phoneNo flexRow middle gap10'>
            <IconPhone fontSize='small'/>&nbsp;{telephone}
          </a>

          <div className='normal legal textSize2 textCenter gap10'>
            {regLong}<br />
            {VATLong}<br />
          </div>


          <div className='small legal textSize2 textCenter gap10'>
            {regShort}<br />
            {VATShort}<br />
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




