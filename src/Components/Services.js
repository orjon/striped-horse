import React, { Component } from 'react';
import '../styles/Section.scss';
// import imageOilRig from '../images/OilRig.jpg';

class Services extends Component {
  render(){
    return(
      <div className='Services'>
        {/* <div className='flexColumn introduction'>
          <strong>we expand your reach</strong>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptatibus, possimus tempora perferendis.
          </p>
        </div> */}
        <div className='heroImage image02 flexColumn center'>
          <div className='flexColumn introduction overlayWhite'>
            <strong>we expand your reach</strong>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perferendis.
            </p>
          </div>
        </div>

        <div className='introduction center'>
          Services:<br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptatibus, possimus tempora perferendis.
        </div>

        <div className='heroImage image02'>
          <div className='flexColumn introduction'>
            <strong>we expand your reach</strong>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum voluptatibus, possimus tempora perferendis.
            </p>
          </div>
        </div>

      </div>
    )
  }
}
export default Services;

