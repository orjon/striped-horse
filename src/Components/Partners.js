import React, { Component } from 'react';
import '../styles/Section.scss';
import { default as PartnerBlock }  from './BlockImageText';
import SectionTitle from './SectionTitle';


class Partners extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // constructor(props){
  //   super(props);
  //   this.state={
  //     text1: '',
  //     text2:''
  //   }
  // }

  // async readTextFile(file) {
  //   var rawFile = await new XMLHttpRequest();
  //   rawFile.open("GET", file, false);
  //   rawFile.onreadystatechange = () => {
  //       if (rawFile.readyState === 4) {
  //           if (rawFile.status === 200 || rawFile.status === 0) {
  //               var allText = rawFile.responseText;
  //               // console.log("allText: ", allText);
  //               this.setState({
  //                   text1: allText
  //               });
  //               // console.log('TEXT 1:', allText)
  //           }
  //       }
  //   };
  //   rawFile.send(null);
  // }

  // fetchTextFile(file) {
  //     fetch(file)
  //       // .then(response => response.json())
  //       .then(text2 => this.setState({ text2 }));
  //   }


  render(){

    // if (this.state.text1 ===''){
    //   this.readTextFile("./textFiles/page1.txt");
    //   console.log('TEXT 1:', this.state.text1)
    // }

    // if (this.state.text2 ===''){
    //   this.fetchTextFile("./textFiles/page1.txt");
    //   console.log('TEXT 2:', this.state.text2)
    // }

   
    return(
      <div className='Partners'>
        <SectionTitle title='Our Partners' />

        {/* <div className='flexColumn textBlock indent40 gap10'>
          <p  className='textSize1'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor 33 modi deleniti.</p>
          <br />
          <p  className='textSize1'>Ea nostrum expedita ab saepe odio ut nobis voluptates sit sequi tempora vel modi ipsum eum laborum nemo? Ut asperiores animi aut ullam blanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit.</p>
        </div> */}

        <div className='flexRow flexWrap indent40 gap10'>

          <PartnerBlock
            link='http://www.emgs.com/'
            width='half'
            textAlign='middle'
            image='partners/EMGS.png'
            title='EMGS ASA'
            text='ElectroMagnetic Geoservices (EMGS ASA) is an Oslo based market leader in the acquisition, processing, imaging and interpretation of marine CSEM data. When integrated with other Geophysical data, such as seismic, CSEM provides for an updated probability of success and volumetric estimation in pre-drill and post-drill settings. To date the company has acquired over 900 commercial surveys and has an extensive multi-client data library in strategic basins around the world.'
          />

          <PartnerBlock
            link='http://www.nventures.co.uk/'
            width='half'
            textAlign='middle'
            image='partners/NVentures.jpg'
            title='NVentures'
            text='NVentures is a UK based upstream exploration firm specialising in technical and commercial intelligence for explorationists. The firm delivers high quality, comprehensive data and reports to oil and service companies worldwide.'
          />

          <PartnerBlock
            link='https://promote-energy.com/'
            width='half'
            textAlign='middle'
            image='partners/PromoteEnergy.jpg'
            title='Promote Energy'
            text='Promote Energy is a Cairo based consultancy and advisory company with a vision to play a key role in the future of energy in Egypt and beyond.'
          />
          <PartnerBlock
            link='http://www.pveconsulting.co.uk/'
            width='half'
            textAlign='middle'
            image='partners/PVE.png'
            title='PVE Consulting'
            text='PVE Consulting is a UK based international advisory consulting firm for the upstream E&amp;P sector. The firm is engaged with a number of E&amp;P companies across Africa and other regions, with high level mandates in transaction support and exploration campaigns.'
          />
        </div>
        {/* <SectionSubTitle subTitle='Delectus et cupiditate' />

        <div className='flexColumn textBlock indent40 gap10'>
          <p  className='textSize1'>Ea nostrum expedita ab saepe odio ut nobis voluptates sit sequi tempora vel modi ipsum eum laborum nemo? Ut asperiores animi aut ullam blanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit. Vlanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit.</p>
          <br />
          <p  className='textSize1'>Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div>

        <SectionSubTitle subTitle='More interesting information' />
        <div className='flexColumn textBlock indent40 gap10'>
          <p  className='textSize1'>Ut placeat molestiae et debitis quae eum molestiae consequatur nam omnis saepe. Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div> */}

        {/* <NavToTop /> */}

      </div>
    )
  }
}

export default Partners;




