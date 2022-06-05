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
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            <div className='cols-2'>
              <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
              <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
              <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div>
          </div>

          <h1 className='text-xl p-3 font-bold'>PROJECT</h1>
        </div>
        <div>
          <div className='grid grid-cols-2'>
            <div className='cols-1'>
            <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            <div className='cols-2'>
            <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
          </div>
          <h1 className='text-xl p-3 font-bold'>BLOG</h1>
        </div>
        <div>
          <div className='grid grid-cols-2'>
            <div className='cols-1'>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
            <div className='cols-2'>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
              <Card image='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt='Image' headline='Headline' description='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
