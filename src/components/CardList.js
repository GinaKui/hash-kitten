import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((robot, i) => {
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
}

export default CardList;