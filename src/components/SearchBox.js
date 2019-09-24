import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
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
}

export default SearchBox;