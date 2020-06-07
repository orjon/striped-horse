import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/SlideShow.scss';
 

class SlideShow extends Component{

  render(){

    let slideFiles = this.props.slides
 
    const fadeProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: false
      // Callback on Change:
      // onChange: (oldIndex, newIndex) => {
      //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
      // }
    }



    let slides = slideFiles.map(image => 
      <div key={image} className="each-fade">
          <div className="image-container">
            <img className='slide show' src={require(`../images/placeholder/${image}.jpg`)} alt=''/>
          </div>
      </div>
    )


    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          {slides}
        </Fade>
      </div>
    )
  }


}

export default SlideShow;

// https://www.npmjs.com/package/react-slideshow-image

