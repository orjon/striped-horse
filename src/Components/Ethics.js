import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import NavToTop from './NavToTop';

class Ethics extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className='Ethics'>

        <SectionTitle title='Ethics' />

        <div className='flexColumn textBlock indent20 gap10'>
          <p className='textSize1'>Reum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor deleniti. Qui esse neque aut mollitia maiores quo laborum error et debitis earum est distinctio sunt! Cum dolores odio aut eveniet quos sit doloribus qui quam assumenda ut delectus molestiae. Aut consequatur enim nam eligendi aspernatur aut nesciunt recusandae ut dolor blandits.</p>
        </div>


        <SectionSubTitle subTitle='Consectetur adipisicing' />

        <div className='flexRow h40 indent2'>
          
          <div className='textBlock w50'>
            <div className='flexColumn textBlock'>
              <p className='textSize1'>Eos veniam nemo eum impedit modi nam voluptatem repellat! Ea officiis obcaecati aut quae voluptate quo modi necessitatibus rem dignissimos deleniti et magnam quasi. Ad exercitationem dolorem non aspernatur molestiae non dolores repudiandae eos sint perferendis.</p>
              <br />
              <p className='textSize1'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor modi deleniti.</p>
            </div>
          </div>
          <div className='image-pumps w50'></div>
        </div>

        <SectionSubTitle subTitle='Adiure upiditate quia eligendi' />

        <div className='flexColumn textBlock indent20 gap10'>
          <p  className='textSize1'>Ea nostrum expedita ab saepe odio ut nobis voluptates sit sequi tempora vel modi ipsum eum laborum nemo? Ut asperiores animi aut ullam blanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit. Vlanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit.</p>
          <br />
          <p className='textSize1'>Et quia laudantium rem quasi mollitia sed nostrum dolore eos accusamus tempore aut similique ea tempora eius ut cumque eaque. Ad iure odio At necessitatibus omnis eos quia dolores ab maiores commodi et modi sapiente qui necessitatibus voluptatem qui nulla exercitationem.</p>
        </div>

        <div className='flexRow h40 textBanner center'>
         <div className='textBlock w75'>
            <h1>quasi mollitia sed nostrum </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perferendis.
            </p>
          </div>
        </div>

        <SectionTitle title='' />
        

        <div className='image-oilrig3 h80 flexColumn bottom'>
          <div className='flexRow textBlock indent10 gap10 overlayWhite'>
            <h2  className='w100'>Ad iure odio At necessitatibus omnis enim nam eligendi aspernatur aut nesciunt</h2>
          </div>
        </div>

        <NavToTop />

      </div>
    )
  }
}

export default Ethics;