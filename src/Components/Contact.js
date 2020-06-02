import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import NavToTop from './NavToTop';
import { default as IconEmail}  from '@material-ui/icons/EmailOutlined';
import { default as IconPhone} from '@material-ui/icons/Call';


class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className='Contact'>
        <SectionTitle title='Contact Details' />
        {/* <SectionSubTitle subTitle='Please get in touch...' /> */}
        <div className='h80 flexColumn gap1 center'>

          <div className='flexRow center textBanner w50'>
            <div className='flexColumn textSize0'>
            <a href='mailto:contact@striped-horse.com' target='_blank' rel='noopener noreferrer' className='gap1'>
                <IconEmail fontSize='small' className='contactItem'/> contact@striped-horse.com
              </a>

              <a href='tel:+447848890660' className='gap1'>
                <IconPhone fontSize='small' className='contactItem'/> +44 (0)784 8890660
              </a>

              <div className='gap1'>
              Striped Horse Resources Ltd<br />
              46 High St<br />
              Much Wenlock<br />
              TF13 6AD<br />
              United Kingdom
              </div>

              </div>
          </div>

        </div>

        <NavToTop />
        
      </div>
    )
  }
}

export default Contact;

