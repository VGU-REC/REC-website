import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Pagination from './Pagination';
function Idea() {
  return (
    <div>
      <Carousel/>
      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className='text-xl p-3 font-bold'>BLOG</h1>
        </div>
        <div className='p-3'>
          <Card/>
          <Card/>
          <Card/>
      </div>
      </div>
      <Pagination/>
    </div>
  );
}

export default Idea;
