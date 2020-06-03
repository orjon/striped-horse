import React, { Component } from 'react';
import '../styles/Section.scss';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import NavToTop from './NavToTop';
import SlideShow from './SlideShow';


class Services extends Component {
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

    let { slidesA } = this.state

    return(
      <div className='Services'>

        <div className='image04 h80 flexColumn spread'>
          <div className='overlayTop'>
            <SectionTitle title='Services' overlay={true}/>
          </div>
          <div className='flexRow textBlock indent20 gap20 flex overlayWhite right bottom'>
            <h2 className='w60 justifyRight'>Providing high-end technology solutions to the upstream industry in Sub-Sahara Africa and beyond</h2>
          </div>
        </div>

        <SectionSubTitle subTitle='Adiure upiditate quia eligendi' />

        <div className='flexColumn textBlock indent40 gap10'>
          <p className='textSize1'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor deleniti. Qui esse neque aut mollitia maiores quo laborum error et debitis earum est distinctio sunt! Cum dolores odio aut eveniet quos sit doloribus qui quam assumenda ut delectus molestiae. Aut consequatur enim nam eligendi aspernatur aut nesciunt recusandae ut dolor blanditiis.</p>
          <br />
          <p className='textSize1'>Et quia laudantium rem quasi mollitia sed nostrum dolore eos accusamus tempore aut similique ea tempora eius ut cumque eaque. Ad iure odio At necessitatibus omnis eos quia dolores ab maiores commodi et modi sapiente qui necessitatibus voluptatem qui nulla exercitationem.</p>
        </div>

        <div className='flexRow h50'>
          <div className='textBlock w50'>
            <SectionSubTitle subTitle='Consectetur adipisicing' />
            <div className='flexColumn textBlock indent40 gap10'>
              <p className='textSize1'>Ad illum consequatur ea voluptas voluptas est aspernatur doloribus qui animi incidunt 33 officia voluptatem non nostrum eligendi. Eos veniam nemo eum impedit modi nam voluptatem repellat! Ea officiis obcaecati aut quae voluptate quo modi necessitatibus rem dignissimos deleniti et magnam quasi. Ad exercitationem dolorem non aspernatur molestiae non dolores repudiandae eos sint perferendis.</p>
              <br />
              <p className='textSize1'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor modi deleniti.</p>
            </div>
          </div>
          <div className='image-pipes w40'></div>
        </div>

        <SectionSubTitle subTitle='Some information' />

        <div className='flexColumn textBlock indent40 gap10'>
          <p  className='textSize1'>Ea nostrum expedita ab saepe odio ut nobis voluptates sit sequi tempora vel modi ipsum eum laborum nemo? Ut asperiores animi aut ullam blanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit. Vlanditiis rem officia quod ex saepe iure et dolorem consequatur hic illum cupiditate ea quia eligendi. Et Quis obcaecati aut labore voluptatem eos voluptas velit.</p>
          <br />
          <p className='textSize1'>Ut placeat molestiae et debitis quae eum molestiae consequatur nam omnis saepe. Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div>

        <div className='flexColumn h20 indent40 gap10'>
          <SlideShow slides={slidesA}/>
        </div>

        <div className='flexRow h50'>
          <div className='image-3d w50'></div>
          <div className='textBlock w60'>
            <SectionSubTitle subTitle='Aut vitae iste' />
            <div className='flexColumn textBlock indent40 gap10'>
              <p className='textSize1'>Consequatur ea voluptas voluptas est aspernatur doloribus qui animi incidunt 33 officia voluptatem non nostrum eligendi. Eos veniam nemo eum impedit modi nam voluptatem repellat! Ea officiis obcaecati aut quae necessitatibus rem dignissimos deleniti et magnam quasi. Ad exercitationem dolorem non aspernatur molestiae non dolores repudiandae eos sint perferendis.</p>
              <br />
              <p className='textSize1'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor modi deleniti.</p>
            </div>
          </div>

        </div>
        

        <SectionSubTitle subTitle='More interesting information' />

        <div className='flexColumn textBlock indent40 gap10'>
          <p className='textSize2'>Ex consequuntur architecto et officia aliquam At dolores repellendus et nulla aliquid vel sint nostrum in deserunt inventore est culpa molestiae. Aut necessitatibus similique ut maiores enim est eius commodi sit harum enim cum magnam cupiditate ut illo dolor. Ut quas necessitatibus non labore velit sed aspernatur similique aut voluptates nostrum est error perspiciatis est assumenda laborum. Sed natus voluptas et atque labore vel consectetur voluptatibus est ullam illo est ducimus voluptatem non maiores corporis. Sit perferendis provident eum iure dolores eos possimus dolorem eum iure provident et voluptatem dicta. Et modi maiores sed fugiat voluptatum aut facere commodi. Ut minus Quis eum error labore est omnis dicta! Ea quae tenetur sit omnis dolor et soluta expedita ut obcaecati maiores eum dicta sunt.</p>
          <br />
          <p className='textSize2'>Ut placeat molestiae et debitis quae eum molestiae consequatur nam omnis saepe. Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div>

        <NavToTop />

      </div>
    )
  }
}
export default Services;

