import React, { Component } from 'react'
import '../styles/PartnerCard.scss';

class PartnerCard extends Component {
  render(){
    let { title, text, image, link } = this.props

    if (link === undefined) {
      console.log('Undefined link for:', title)
    }

    const imagePath = require(`../images/${image}`)

    return(
      <div className={`PartnerCard h0 indent20 gap20 flexColumn middle`}>
        <a href={link} target='_blank' rel='noopener noreferrer' className={`Card flexColumn center indent20 gap40`}>

          <img className='PartnerImage indent20' src={imagePath} alt={`${title} logo`}/>

          <div className={'PartnerText textBlock flexColumn textSize1'}>
            <strong className={`gap10 textSize2 textCenter`}>{title}</strong>
            <p className='textJustify textSize3'>{text}</p>
          </div>

        </a>
      </div>
    )
  }
}

export default PartnerCard