import React, { useRef } from 'react';
import { Fade } from 'react-slideshow-image';
import '../styles/SlideShow.scss';

const SlideShow = ({ slideArray, path, speed }) => {
  let slideShow = useRef();
  let slideFiles = slideArray;
  console.log('slides');

  const fadeProperties = {
    duration: speed,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    // Callback on Change:
    // onChange: (oldIndex, newIndex) => {
    //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    // }
  };

  let slides = undefined;
  if (slideFiles) {
    slides = slideFiles.map((image) => {
      const imagePath = require(`../images/${path}/${image}.jpg`);
      return (
        <div key={image} className='each-fade'>
          <div className='image-container'>
            <img className='slide show' src={imagePath} alt='' />
          </div>
        </div>
      );
    });
  }

  return (
    <div className='slide-container'>
      {slides && (
        <Fade ref={slideShow} {...fadeProperties}>
          {slides}
        </Fade>
      )}
    </div>
  );
};

export default SlideShow;

// https://www.npmjs.com/package/react-slideshow-image
