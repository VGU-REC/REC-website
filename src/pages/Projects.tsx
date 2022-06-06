import { Card, Carousel, CardNoImage } from 'components';

function Projects() {
  return (
    <div className='bg-gray-200'>
      <div className='grid grid-cols-2'>
        <div className='col-1 pt-20'>
          <h1 className='text-xl p-3 font-bold text-center'>PAST PROJECT</h1>
          <div className='flex justify-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatAmet minim </div>
          <div className='flex justify-center pt-3'>
            <button type="button" className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">See more</button>
          </div>
        </div>
        <div className='col-2'>
          <Carousel />
        </div>
      </div>

      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className='text-xl p-3 font-bold'>PENDING PROJECT</h1>
        </div>
        <div>
          <div className='grid grid-cols-3 p-3'>
            <div className='cols-1'>
              <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
            <div className='cols-2'>
              <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
            <div className='cols-3'>
              <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
          </div>
          <h1 className='text-xl p-3 font-bold'>RECRUIT PROJECT</h1>
        </div>
        <div>
          <div className='grid grid-cols-3 p-3'>
            <div className='cols-1'>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            <div className='cols-2'>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            <div className='cols-3'>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
          </div>
          <h1 className='text-xl p-3 font-bold'>IDEA</h1>
        </div>
        <div className='grid grid-cols-1 gap-4 content-center p-3'>
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
