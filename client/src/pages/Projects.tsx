import { Card, Carousel, CardNoImage, CarouselMultipleItems } from 'components';
import {Link} from "react-router-dom";

function Projects() {
  return (
    <div className='bg-gray-200'>
      <div className='bg-white grid grid-cols-2 h-96'>
        <div className='col-1 pt-20'>
          <h1 className='text-xl p-3 font-bold text-center'>PAST PROJECT</h1>
          <div className='flex justify-center'>
            <div className='w-96'>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatAmet minim</p>
            </div>
          </div>
          <div className='flex justify-center pt-3'>
            <Link to="/project/past">
              <button type="button" className="inline-block px-4 py-2.5 bg-orange-400 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">See more</button>
            </Link>
          </div>
        </div>
        <div className='col-2 pt-6'>
          <Carousel />
        </div>
      </div>

      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className='text-xl p-3 font-bold'>PENDING PROJECT</h1>
        </div>
        <div>
          <CarouselMultipleItems/>
          <Link to="/project/recruiting"><h1 className='text-xl p-3 font-bold hover:text-orange-600'>RECRUIT PROJECT</h1></Link>
        </div>
        <div>
          <div className='grid grid-cols-3 p-4'>
            <div className='cols-1'>
              <Card image='img1.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='img2.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            <div className='cols-2'>
              <Card image='img3.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='img4.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            <div className='cols-3'>
              <Card image='img5.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='img6.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <Link to="/project/idea"><h1 className='text-xl p-3 font-bold hover:text-orange-600'>IDEA</h1></Link>
            <div className='pr-5 pb-2'>
              <Link to="/project/new">
                <button type="button" className="inline-block px-8 py-4 bg-orange-400 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out">New Project</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 content-center p-4'>
          <div>
            <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
          <div>
            <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
          <div>
            <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Projects };
