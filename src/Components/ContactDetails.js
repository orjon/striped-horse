import React, { Fragment } from 'react';
import { default as IconEmail } from '@material-ui/icons/EmailOutlined';
import { default as IconPhone } from '@material-ui/icons/Call';
import flagAngola from '../images/contact/flag-angola.jpg';
import flagUK from '../images/contact/flag-uk.jpg';

import GetText from '../Helpers/GetText';

import '../styles/Contact.scss';
import '../styles/Nav.scss';

const ContactDetails = ({ location }) => {
  const address01 = <GetText file={`contact-${location}-Address01`} />;
  const address02 = <GetText file={`contact-${location}-Address02`} />;
  const address03 = <GetText file={`contact-${location}-Address03`} />;
  const address04 = <GetText file={`contact-${location}-Address04`} />;
  const address05 = <GetText file={`contact-${location}-Address05`} />;

  return (
    <div className='sectionContent fullHeight flexColumn textSize0 indent20 center w100'>
      <div className='address textCenter gap10'>
        {location === 'UK' && (
          <img className='flag' src={flagUK} alt='UK country flag' />
        )}
        {location === 'Angola' && (
          <img className='flag' src={flagAngola} alt='Angola country flag' />
        )}
        <div className='LogoText'>{address01}</div>
        {address02}
        <br />
        {address03}
        <br />
        {address04}
        <br />
        {address05}
        <br />
      </div>

      <a
        href='mailto:enquiries@striped-horse.com'
        target='_blank'
        rel='noopener noreferrer'
        className='email flexRow middle gap10'
      >
        <IconEmail fontSize='small' />
        &nbsp;enquiries@striped-horse.com
      </a>
      {location === 'UK' && (
        <Fragment>
          <a
            href='mailto:cthomas@striped-horse.com'
            target='_blank'
            rel='noopener noreferrer'
            className='email flexRow middle gap10'
          >
            <IconEmail fontSize='small' />
            &nbsp;cthomas@striped-horse.com
          </a>

          <a href='tel:+447436890478' className='phoneNo flexRow middle gap10'>
            <IconPhone fontSize='small' />
            &nbsp;+44 (0)743 689 0478
          </a>
        </Fragment>
      )}

      {location === 'Angola' && (
        <Fragment>
          <a
            href='mailto:dilosa@striped-horse.com'
            target='_blank'
            rel='noopener noreferrer'
            className='email flexRow middle gap10'
          >
            <IconEmail fontSize='small' />
            &nbsp;dilosa@striped-horse.com
          </a>

          <a href='tel:+244928640068' className='phoneNo flexRow middle gap10'>
            <IconPhone fontSize='small' />
            &nbsp;+244 928 640 068
          </a>
        </Fragment>
      )}
    </div>
  );
};

export default ContactDetails;
