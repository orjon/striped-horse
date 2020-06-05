import React, { Component } from 'react';
import '../styles/BlockImageText.scss';

class RowImageText extends Component {
  render(){
    let { title , text, image, width, link } = this.props

    console.log('Link:', link)

    const imagePath = require(`../images/${image}`)


    return(
      <div className={`BlockImageText indent20 gap20 flexRow middle ${width}`}>

        <div className='Card flexRow middle indent20 gap40'>

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <img className='BlockImage' src={imagePath} alt={`${title} logo`}/>
          </a>

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <div className={`BlockText flexColumn textSize1`}>
              <strong className='gap10 textCenter'>{title}</strong>
              <p className='textJustify'>{text}</p>
            </div>
          </a>
          
        </div>

      </div>
    )
  }
}

export default RowImageText