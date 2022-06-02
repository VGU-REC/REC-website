import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
function Achievement() {
  return (
    <div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover header">
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed header2">
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl font-bold mt-0 mb-6">ACHIEVEMENT</h1>
              <h3 className="text-3xl font-bold mb-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatAmet minim</h3>
            </div>
          </div>
        </div>
      </div>

      <Card />

      <Carousel />

    </div>
  );
}

export default Achievement;
