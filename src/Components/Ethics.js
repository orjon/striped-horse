import React, { Component } from 'react';
import '../styles/Ethics.scss';
import SectionTitle from './SectionTitle';

class Ethics extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){


    return(
      <div className='Ethics'>

        <SectionTitle title='Ethics' />

        <div className='textBlock center w100'>


          <div className='small flexColumn center textSize1 indent40 textJustify '>
            <img src={require('../images/ethics/ethics.jpg')} alt='Stop sign in the desert' className='' />
            <p><strong>Striped Horse Resources</strong> operates with a zero-tolerance policy towards the giving and receipt of bribes, and of bribery and corruption in any form. It aspires to operate to best practice standards and complies with all relevant laws in all the jurisdictions wherever it operates.</p>
          </div>

          <div className='normal flexRow middle textSize0 indent40 textJustify'>
            <img src={require('../images/ethics/ethics.jpg')} alt='Stop sign in the desert' className='w50 right' />
            <p>
              <strong>Striped Horse Resources</strong> operates with a zero-tolerance policy towards the giving and receipt of bribes, and of bribery and corruption in any form. It aspires to operate to best practice standards and complies with all relevant laws in all the jurisdictions wherever it operates.
            </p>
          </div>

        </div>


      </div>
    )
  }
}

export default Ethics;