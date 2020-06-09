import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/SlideShow.scss';
 

class SlideShowWithText extends Component{

  render(){

    let slideFiles = this.props.slides
    let { speed, path } = this.props
 
    const fadeProperties = {
      duration: speed,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false
      // Callback on Change:
      // onChange: (oldIndex, newIndex) => {
      //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
      // }
    }

    let slides = slideFiles.map(image => {
      const imagePath = require(`../images/${path}/${image}.jpg`)
      return <div key={image} className='each-fade'>
          <div className='image-container'>
            <img className='slide show' src={imagePath} alt=''/>
          </div>
      </div>
      })


    return (
      <div className='slide-container'>
        <Fade {...fadeProperties}>
          {slides}
        </Fade>
      </div>
    )
  }


}

export default SlideShowWithText;

// https://www.npmjs.com/package/react-slideshow-image

