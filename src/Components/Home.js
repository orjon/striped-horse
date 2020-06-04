import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Section.scss';
// import NavToTop from './NavToTop';
import '../styles/Nav.scss';



class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
          slidesA: ['A01','A02','A03']
      };
    }
  
    componentDidMount() {
      window.scrollTo(0, 0)
    }
  
    render(){
  
  
      return(
        <div className='Home'>
  
          <div className='image04 h80 flexColumn spread'>
            <div className='overlayTop'>
              {/* <SectionTitle title='Home' overlay={true}/> */}
            </div>
            <div className='flexRow textBlock indent20 gap20 flex overlayWhite right bottom'>
              <h2 className='w80 textRight'>Delivering energy solutions in Africa’s economic evolution</h2>
            </div>
          </div>

          <div className='flexColumn textBlock indent40 gap40'>
            <h3 className='textJustify'>
              Striped Horse Resources Limited was established in 2018 &amp; is an international upstream consultancy company focused on the African market. Its focus &amp; business philosophy is always to be optimistic, seek mutual value and win-win outcomes for all customers, stakeholders, partners &amp; investors.
            </h3>
            <h4 className='w100 flexRow right'>
              <Link to={`/test/about`} className='navTextLink'>Read more...</Link>
            </h4>

          </div>
  
          {/* <NavToTop /> */}
  
        </div>
      )
    }
  }

  

export default Home;