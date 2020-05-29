import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import { default as IconNavUp} from '@material-ui/icons/KeyboardArrowUp';

class Ethics extends Component {
  render(){
    return(
      <div className='Ethics'>

        <SectionTitle title='Ethics' />

        <div className='flexColumn textBlock indent2 gap1'>
          <p className='textSize1'>Reum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor deleniti. Qui esse neque aut mollitia maiores quo laborum error et debitis earum est distinctio sunt! Cum dolores odio aut eveniet quos sit doloribus qui quam assumenda ut delectus molestiae. Aut consequatur enim nam eligendi aspernatur aut nesciunt recusandae ut dolor blandits.</p>
          <br />
          <p className='textSize1'>Et quia laudantium rem quasi mollitia sed nostrum dolore eos accusamus tempore aut similique ea tempora eius ut cumque eaque. Ad iure odio At necessitatibus omnis eos quia dolores ab maiores commodi et modi sapiente qui necessitatibus voluptatem qui nulla exercitationem.</p>
        </div>

        

        <div className='flexRow h40 textBanner center'>
         <div className='textBlock'>
            <h1>quasi mollitia sed nostrum </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perferendis.
            </p>
          </div>
        </div>

        <SectionTitle title='' />
        

        <div className='image-oilrig3 h80 flexColumn bottom'>
          <div className='flexRow textBlock indent1 gap1 overlayWhite'>
            <h2  className='w100'>Ad iure odio At necessitatibus omnis enim nam eligendi aspernatur aut nesciunt</h2>
          </div>
        </div>

        <div className='flexRow center indent1 gap2'>
          <IconNavUp />
        </div>

      </div>
    )
  }
}

export default Ethics;