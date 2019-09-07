import React from 'react';

const Card = ({ name, website, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?set=set4;size=160x160`} />
      <div>
        <h2>{name}</h2>
        <p>{website}</p>
      </div>
    </div>
  );
}

export default Card;
