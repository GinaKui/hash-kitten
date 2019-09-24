import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchChange }) => (
  <div className='pa2'>
    <input
      className='pa3 ba br2 b--dark-blue bg-washed-blue'
      type='search'
      placeholder='Search kitty'
      size='30'
      onChange={searchChange}
    />
  </div>
);


SearchBox.propTypes = {
  searchChange: PropTypes.func.isRequired,
};

export default SearchBox;