import { CardNoImage, Carousel, Pagination } from 'components';

function Activities() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className='text-xl p-3 font-bold'>ACTIVITY</h1>
        </div>
        <div className='p-3'>
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export { Activities };
