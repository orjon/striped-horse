import React, { Component } from 'react';
import '../styles/Section.scss';
import NavToTop from './NavToTop';


class Home extends Component {

  render(){

    return(
      <div className='Home'>

        {/* <SectionTitle title='Home' />

        <div className='flexColumn textBlock indent20 gap10'>
          <p className='textSize1'>Reum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor deleniti. Qui esse neque aut mollitia maiores quo laborum error et debitis earum est distinctio sunt! Cum dolores odio aut eveniet quos sit doloribus qui quam assumenda ut delectus molestiae. Aut consequatur enim nam eligendi aspernatur aut nesciunt recusandae ut dolor blandits.</p>
          <br />
          <p className='textSize1'>Et quia laudantium rem quasi mollitia sed nostrum dolore eos accusamus tempore aut similique ea tempora eius ut cumque eaque. Ad iure odio At necessitatibus omnis eos quia dolores ab maiores commodi et modi sapiente qui necessitatibus voluptatem qui nulla exercitationem.</p>
        </div>

        <SectionSubTitle subTitle='The Board' />
        <div className='flexRow flexWrap indent2'>
          <HeadShots partner='personMan1' text='Corporis molestiae et quia nobis. Et omnis doloremque ad porro minima qui voluptatum consequatur.'/>
          <HeadShots partner='personLady2' text='Lorem ipsum, dolor sit amet sectetur pisicing elit. Eos quidem beatae et itaque explicabo et deserunt.'/>
          <HeadShots partner='personMan2' text='Sit aut quidem asperiores sunt est facere nesciunt aut recusandae. Id vero illo et aperiam temporibus.'/>
          <HeadShots partner='personLady1' text='Ut nobis dolore est autem. Qui dolore vitae a quod tempore.'/>
        </div>

        <SectionSubTitle subTitle='' /> */}

        <div className='image02 h100 flexColumn center'>
          <div className='flexColumn textBanner w75 overlayWhite'>
            <h1>we expand your reach</h1>
            <p className='textSize0'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perferendis.
            </p>
          </div>
        </div>

        <NavToTop />
      </div>
    )
  }
}

export default Home;