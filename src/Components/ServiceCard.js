import React, { Component } from 'react';
import '../styles/ServiceCard.scss';



class ServiceCard extends Component {
  render(){
    let { title, titleAlign, text, image, width, link, orientation, alignment } = this.props

    if (link === undefined) {
      console.log('Undefined link for:', title)
    }

    const imagePath = require(`../images/${image}`)


    return(
      <div className={`ServiceCard h0 w100 indent20 gap20 flexColumn middle ${width}`}>
 
        <div className={`Card ${orientation} ${alignment} w100 indent20 gap40`}>
        

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <img className='BlockImage indent20' src={imagePath} alt={`${title} logo`}/>
          </a>

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <div className={'textBlock flexColumn textSize1'}>
              <strong className={`gap10 ${titleAlign}`}>{title}</strong>
              <p className='textJustify textSize2'>{text}</p>
            </div>
          </a>
          
        </div>

      </div>
    )
  }
}

export default ServiceCard
