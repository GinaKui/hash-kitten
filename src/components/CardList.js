import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardList = ({ entityArray }) => (
  <div style={{ overflow: 'scroll'}}>
  {
    entityArray.map( entity => (
      <Card
        key={entity.id}
        id={entity.id}
        name={entity.username}
        website={entity.website}
      />)
    )
  }
  </div>
);


CardList.propTypes = {
  entityArray: PropTypes.array.isRequired
};

export default CardList;
