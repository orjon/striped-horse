import React, { useEffect } from 'react';
import SectionTitle from './SectionTitle';
import AmbassadorCard from './AmbassadorCard';
// import NavToTop from './Nav/NavToTop';
import GetText from '../Helpers/GetText';
import '../styles/Ambassadors.scss';

let Ambassadors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='Ambassadors'>
      <SectionTitle title='Company Ambassadors' />
      <div className='sectionContent'>
        <div className='flexColumn textBlock indent20'>
          <div className='textSize1 textJustify'>
            <GetText file='ambassadors-intro' />
          </div>
        </div>

        <div className='flexRow flexWrap'>
          <AmbassadorCard
            image='ambassadors/tako.jpg'
            name='Tako Koning'
            text={<GetText file='ambassadors-tako' />}
            qualifications={[
              'B.Sc. Geology. University of Alberta. (1971)',
              'B.A. Economics. University of Calgary. (1981)',
            ]}
          />

          <AmbassadorCard
            image='ambassadors/ahmad.jpg'
            name='Ahmad Maidinsar'
            text={<GetText file='ambassadors-ahmad' />}
            qualifications={[
              'B.Sc. Physics. University of Sains, Malaysia. (1982)',
              'PostGrad Dip in Systems Analysis (IT) University of Aston, Birmingham. UK. (1983)',
            ]}
          />
        </div>
        {/* <NavToTop /> */}
      </div>
    </div>
  );
};

export default Ambassadors;
