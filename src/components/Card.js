import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, website, id }) => (
  <div className='tc grow bg-washed-blue br3 pa3 ma2 dib bw2 shadow-5'>
    <img alt='kitty avatar' src={`https://robohash.org/${id}?set=set4;size=160x160`} />
    <div>
      <h3 className='ttc'>{name}</h3>
      <p>{website}</p>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string,
  website: PropTypes.string,
}

export default Card;
