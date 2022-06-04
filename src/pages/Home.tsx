import { Card, Carousel, CardNoImage } from 'components';

function Home() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className='text-xl p-3 font-bold'>ACTIVITY</h1>
        </div>
        <div>
          <div className='grid grid-cols-2'>
            <div className='cols-1'>
              <Card />
              <Card />
              <Card />
            </div>
            <div className='cols-2'>
              <CardNoImage />
              <CardNoImage />
              <CardNoImage />
            </div>
          </div>

          <h1 className='text-xl p-3 font-bold'>PROJECT</h1>
        </div>
        <div>
          <div className='grid grid-cols-2'>
            <div className='cols-1'>
              <Card />
              <Card />
            </div>
            <div className='cols-2'>
              <Card />
              <Card />
            </div>
          </div>
          <h1 className='text-xl p-3 font-bold'>BLOG</h1>
        </div>
        <div>
          <div className='grid grid-cols-2'>
            <div className='cols-1'>
              <Card />
            </div>
            <div className='cols-2'>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
