import React, { Component } from 'react';
import '../styles/Section.scss';
import PartnerBlock from './PartnerBlock';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import { default as IconNavUp} from '@material-ui/icons/KeyboardArrowUp';


class Partners extends Component {

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
        <div className='flexColumn textBlock indent2 gap1'>
          <p  className='textSize1'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor 33 modi deleniti.</p>
          <br />
          <p  className='textSize1'>Ea nostrum expedita ab saepe odio ut nobis voluptates sit sequi tempora vel modi ipsum eum laborum nemo? Ut asperiores animi aut ullam blanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit.</p>
        </div>
        <div className='flexRow flexWrap indent2 gap1'>
          <PartnerBlock partner='bp' text='Corporis molestiae et quia nobis. Et omnis doloremque ad porro minima qui voluptatum consequatur.'/>
          <PartnerBlock partner='elf' text='Lorem ipsum, dolor sit amet sectetur pisicing elit. Eos quidem beatae et itaque explicabo et deserunt.'/>
          <PartnerBlock partner='eni' text='Sit aut quidem asperiores sunt est facere nesciunt aut recusandae. Id vero illo et aperiam temporibus.'/>
          <PartnerBlock partner='chevron' text='Ut nobis dolore est autem. Qui dolore vitae a quod tempore.'/>
          <PartnerBlock partner='q8' text='Dolm aut quasi volupt atem. At vero voluptatem omnis doloremque recusandae internos.'/>
          <PartnerBlock partner='tamoil' text='Fuga consequuntur in fugit ducimus. At fugit distinctio aut eaque quia et molestiae quia ut similique voluptas.'/>
          <PartnerBlock partner='petronas' text='Inventore reprehenderit et magnam autem et illum nihil qui explicabo.'/>
          <PartnerBlock partner='esso' text='Sit repudiandae aut quidem asperiores est officiis sunt est facere nesciunt. Quidem beatae et itaque explicabo.'/>
        </div>
        <SectionSubTitle subTitle='Delectus et cupiditate' />

        <div className='flexColumn textBlock indent2 gap1'>
          <p  className='textSize1'>Ea nostrum expedita ab saepe odio ut nobis voluptates sit sequi tempora vel modi ipsum eum laborum nemo? Ut asperiores animi aut ullam blanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit. Vlanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit.</p>
          <br />
          <p  className='textSize1'>Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div>

        <SectionSubTitle subTitle='More interesting information' />
        <div className='flexColumn textBlock indent2 gap1'>
          <p  className='textSize1'>Ut placeat molestiae et debitis quae eum molestiae consequatur nam omnis saepe. Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div>
        <div className='flexRow center indent1 gap2'>
          <IconNavUp />
        </div>
      </div>
    )
  }
}

export default Partners;