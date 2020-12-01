import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const KittenList = ({ entityArray }) => {
  if(entityArray.length === 0) {
    return <div>No Matching Kitten</div>;
  }
  return (
    //<div style={{ overflow: 'scroll'}}>
    <div>
      {entityArray.map(({id, username, website }) => (
        <Card
          key={id}
          id={id}
          name={username}
          website={website}
        />)
      )}
    </div>
  );
};


KittenList.propTypes = {
  entityArray: PropTypes.array.isRequired
};

export default KittenList;
