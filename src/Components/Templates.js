import React, { Component } from 'react';
import SlideShow from './SlideShow';
import SectionTitle from './SectionTitle';
import SectionSubTitle from './SectionSubTitle';
import NavToTop from './NavToTop';
import BlockImageText from './BlockImageText';

class Templates extends Component {
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
      <div className='Templates'>

        <SectionTitle title='Example layouts' />

        <div className='flexColumn textBlock indent40 gap10'>
          <p className='textSize1'>Reum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor deleniti. Qui esse neque aut mollitia maiores quo laborum error et debitis earum est distinctio sunt! Cum dolores odio aut eveniet quos sit doloribus qui quam assumenda ut delectus molestiae. Aut consequatur enim nam eligendi aspernatur aut nesciunt recusandae ut dolor blandits.</p>
        </div>


        <SectionSubTitle subTitle='TextBlock with Image' />

        <div className='flexRow h40 indent40'>
          
          <div className='textBlock w50'>
            <div className='flexColumn textBlock'>
              <p className='textSize1'>Eos veniam nemo eum impedit modi nam voluptatem repellat! Ea officiis obcaecati aut quae voluptate quo modi necessitatibus rem dignissimos deleniti et magnam quasi. Ad exercitationem dolorem non aspernatur molestiae non dolores repudiandae eos sint perferendis.</p>
              <br />
              <p className='textSize1'>Aut consequatur voluptate et aperiam minima est nihil cumque. Rem rerum recusandae ut quas labore sit libero quasi! Aut vitae iste et modi dolor id ratione voluptatem sit quia mollitia aut voluptas dolor modi deleniti.</p>
            </div>
          </div>
          <div className='image-pumps w50'></div>
        </div>


        <SectionSubTitle subTitle='The Board' />
        <div className='flexRow flexWrap indent20'>
          <BlockImageText
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='placeholder/personMan1.png'
            title='Philip K. Dick'
            text='Corporis molestiae et quia nobis. Et omnis doloremque ad porro minima qui voluptatum consequatur.'
          />
          <BlockImageText
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='placeholder/personLady2.png'
            title='Beatrice Potter'
            text='Lorem ipsum, dolor sit amet sectetur pisicing elit. Eos quidem beatae et itaque explicabo et deserunt.'
          />
          <BlockImageText
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='placeholder/personMan2.png'
            title='Alex Garland'
            text='Sit aut quidem asperiores sunt est facere nesciunt aut recusandae. Id vero illo et aperiam temporibus.'
          />
          <BlockImageText
            orientation='flexColumn'
            alignment='middle'
            titleAlign='textCenter'
            image='placeholder/personLady1.png'
            title='Ann Rand'
            text='Ut nobis dolore est autem. Qui dolore vitae a quod tempore.'
          />
        </div>

        <SectionSubTitle subTitle='' />

        <div className='image02 h80 flexColumn center'>
          <div className='flexColumn textBanner w75 overlayWhite'>
            <h1>we expand your reach</h1>
            <p className='textSize0'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perferendis.
            </p>
          </div>
        </div>

        <NavToTop />



        <SectionSubTitle subTitle='TextBlock' />

        <div className='flexColumn textBlock indent40 gap10'>
          <p className='textSize2'>Ex consequuntur architecto et officia aliquam At dolores repellendus et nulla aliquid vel sint nostrum in deserunt inventore est culpa molestiae. Aut necessitatibus similique ut maiores enim est eius commodi sit harum enim cum magnam cupiditate ut illo dolor. Ut quas necessitatibus non labore velit sed aspernatur similique aut voluptates nostrum est error perspiciatis est assumenda laborum. Sed natus voluptas et atque labore vel consectetur voluptatibus est ullam illo est ducimus voluptatem non maiores corporis. Sit perferendis provident eum iure dolores eos possimus dolorem eum iure provident et voluptatem dicta. Et modi maiores sed fugiat voluptatum aut facere commodi. Ut minus Quis eum error labore est omnis dicta! Ea quae tenetur sit omnis dolor et soluta expedita ut obcaecati maiores eum dicta sunt.</p>
          <br />
          <p className='textSize2'>Ut placeat molestiae et debitis quae eum molestiae consequatur nam omnis saepe. Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div>


        <SectionSubTitle subTitle='Infinite Slide Show' />
        <div className='flexColumn w100 center indent40 gap10'>
          <div className='w50'>
            <SlideShow slides={slidesA}/>
          </div>
        </div>

        <SectionTitle title='' />
        <div className='flexRow h40 textBanner center'>
         <div className='textBlock w75'>
            <h1>Text Banner</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perferendis.
            </p>
          </div>
        </div>


        <SectionTitle title='' />


        <div className='image04 h80 flexColumn spread'>
          <div className='overlayTop'>
            <SectionTitle title='Image with text' overlay={true}/>
          </div>
          <div className='flexRow textBlock indent20 gap20 flex overlayWhite right bottom'>
            <h2 className='w60 justifyRight'>Delivering energy solutions in Africa’s economic evolution</h2>
          </div>
        </div>

        <SectionSubTitle subTitle='More interesting information' />

        <div className='flexColumn textBlock indent40 gap10'>
          <p className='textSize2'>Ex consequuntur architecto et officia aliquam At dolores repellendus et nulla aliquid vel sint nostrum in deserunt inventore est culpa molestiae. Aut necessitatibus similique ut maiores enim est eius commodi sit harum enim cum magnam cupiditate ut illo dolor. Ut quas necessitatibus non labore velit sed aspernatur similique aut voluptates nostrum est error perspiciatis est assumenda laborum. Sed natus voluptas et atque labore vel consectetur voluptatibus est ullam illo est ducimus voluptatem non maiores corporis. Sit perferendis provident eum iure dolores eos possimus dolorem eum iure provident et voluptatem dicta. Et modi maiores sed fugiat voluptatum aut facere commodi. Ut minus Quis eum error labore est omnis dicta! Ea quae tenetur sit omnis dolor et soluta expedita ut obcaecati maiores eum dicta sunt.</p>
          <br />
          <p className='textSize2'>Ut placeat molestiae et debitis quae eum molestiae consequatur nam omnis saepe. Sit impedit reiciendis qui nulla deserunt sed magnam excepturi et nobis corporis ad illum explicabo et omnis Quis. Eum molestiae possimus in magnam ipsum ea velit molestiae nam galisum delectus et cupiditate perferendis et veritatis corrupti.</p>
        </div>


        <SectionTitle title='' />


        <SectionTitle title='' />

        <div className='image-oilrig3 h80 flexColumn bottom'>
          <div className='flexRow textBlock indent10 gap10 overlayWhite'>
            <h2  className='w100'>Ad iure odio At necessitatibus omnis enim nam eligendi aspernatur aut nesciunt</h2>
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


        <div className='flexRow h50'>
          <div className='image-3d w50'></div>
          <div className='textBlock w60'>
            <SectionSubTitle subTitle='Image and textBlock' />
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

export default Templates;