import React, { Component } from 'react';
import '../styles/BlockImageText.scss';



class BlockImageText extends Component {
  render(){
    let { title, titleAlign, text, image, width, link, orientation, alignment } = this.props

    if (link === undefined) {
      console.log('Undefined link for:', title)
    }

    const imagePath = require(`../images/${image}`)


    return(
      <div className={`BlockImageText h0 indent20 gap20 flexColumn middle ${width}`}>
 
        <div className={`Card ${orientation} ${alignment} indent20 gap40`}>
        

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <img className='w50 indent20' src={imagePath} alt={`${title} logo`}/>
          </a>

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <div className={'textBlock flexColumn textSize1'}>
              <strong className={`gap10 textSize2${titleAlign}`}>{title}</strong>
              <p className='textJustify textSize3'>{text}</p>
            </div>
          </a>
          
        </div>

      </div>
    )
  }
}

export default BlockImageText
