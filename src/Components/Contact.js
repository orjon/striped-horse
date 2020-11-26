import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import ContactDetails from './ContactDetails';
import '../styles/Contact.scss';
import '../styles/Nav.scss';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='Contact'>
        <SectionTitle title='Contact Details' />
        <div className='ContactLocations'>
          <ContactDetails location='UK' />
          <ContactDetails location='Angola' />
        </div>
        <div className='orjon textSize2 flexColumn textCenter TextLink'>
          <a href='http://www.orjon.com/' className='flexRow middle gap10'>
            [ design + build : orjon ]
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
