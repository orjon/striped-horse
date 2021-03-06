import React from 'react';
import '../styles/AmbassadorCard.scss';

const AmbassadorCard = ({ name, text, qualifications, image, link }) => {
  if (link === undefined) {
    console.log('Undefined link for:', name);
  }

  let qualificationList = qualifications.map((qualification) => {
    return (
      <p key={qualification} className='textJustify textSize3 gap5'>
        <strong key={qualification} className=''>
          {qualification}
          <br />
        </strong>
      </p>
    );
  });

  const imagePath = require(`../images/${image}`);

  return (
    <div className={`AmbassadorCard h0 indent20 gap20 flexColumn middle`}>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className={`Card flexColumn center indent20 gap40`}
      >
        <img
          className='AmbassadorImage indent20'
          src={imagePath}
          alt={`${name} logo`}
        />

        <div className={'AmbassadorText textBlock flexColumn textSize1'}>
          <strong className={`gap10 textSize2 textCenter`}>{name}</strong>
          <p className='textJustify textSize3'>
            <strong>{name} </strong>
            {text}
            <br />
          </p>
          <div className={`textSize2`}>{qualificationList}</div>
        </div>
      </a>
    </div>
  );
};

export default AmbassadorCard;
