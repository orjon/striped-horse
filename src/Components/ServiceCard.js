import React, { Component } from 'react';
import '../styles/ServiceCard.scss';



class ServiceCard extends Component {
  render(){
    let { title, titleAlign, text, image, width, orientation, alignment } = this.props

    const imagePath = require(`../images/${image}`)
    return(
      <div className={`ServiceCard w100 indent20 gap20 flexColumn middle ${width}`}>
 
        <div className={`Card ${orientation} ${alignment} w100 indent20 gap40`}>
        
          <img className='BlockImage' src={imagePath} alt={`${title} logo`}/>

          <div className={'textBlock flexColumn textSize1'}>
            <strong className={`gap20 ${titleAlign}`}>{title}</strong>
            <p className='textJustify textSize2'>{text}</p>
          </div>

        </div>

      </div>
    )
  }
}

export default ServiceCard
