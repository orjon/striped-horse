import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GetText from '../Helpers/GetText';
import '../styles/Home.scss';
import '../styles/Nav.scss';



class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
          // slidesA: ['A01','A02','A03']
      };
    }
  
    componentDidMount() {
      window.scrollTo(0, 0)
    }
  
    render(){


      return(
        <div className='Home'>
  
          <div className='image01 h60 flexColumn spread'>
            <div className='overlayTop'>
              {/* <SectionTitle title='Home' overlay={true}/> */}
            </div>
            <div className='sectionContent flexRow textBlock gap20 flex overlayWhite right bottom'>
              <h2 className='w80 indent20 textRight'>
                <GetText file='home-01'/>
              </h2>
            </div>
          </div>

          <div className='sectionContent'>

            <div className='flexColumn indent20 textBlock gap40'>
              <div className='textSize0'>
                <GetText file='home-02'/>
              </div>
              <div className='textSize0 w100 flexRow right'>
                <Link to={`/about`} className='navTextLink'>read more...</Link>
              </div>
            </div>

          </div>
  
        </div>
      )
    }
  }

  

export default Home;