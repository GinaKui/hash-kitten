import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardList = ({ entityArray }) => {
  return (
    <div style={{ overflow: 'scroll'}}>
      {
        entityArray.map((robot, i) => {
          return (
            <Card
              key={i}
              id={robot.id}
              name={robot.name}
              website={robot.website}
            />
          );
        })
      }
    </div>
  );
};

CardList.propTypes = {
  entityArray: PropTypes.array.isRequired
};

export default CardList;
