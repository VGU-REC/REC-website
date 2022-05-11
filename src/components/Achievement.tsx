import React from 'react';
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

        <div className="flex justify-center p-3">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Headline</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
        </div>

        <Carousel/>

    </div>
  );
}

export default Achievement;
