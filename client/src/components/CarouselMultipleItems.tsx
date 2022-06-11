import { CardNoImage } from "./CardNoImage";

function CarouselMultipleItems() {
  const prev = document.querySelector('.prev') as HTMLElement | null;
  const next = document.querySelector('.next') as HTMLElement | null;
  const track = document.querySelector('.track') as HTMLElement | null;
  const carousel = document.querySelector('.carousel-container') as HTMLElement | null;
  var width: number;
  var index: number;
  if (carousel != null && next!= null && prev != null)
  {
    width = carousel.offsetWidth;
    window.addEventListener('resize', () => {
      width = carousel.offsetWidth;
    })
    index = 0;
    next.addEventListener('click', () => {
      if (track != null && prev != null)
      {
        index++;
        prev.classList.add('show');
        track.style.transform = `translateX(-${index * width}px)`;
        if (track.offsetWidth - (index * width) < width)
        {
          next.classList.add('hide');
        }
      }
    });
    prev.addEventListener('click', () => {
      if (track != null)
      {
        index--;
        next.classList.remove('hide');
        if (index === 0)
        {
          prev.classList.remove('show');
        }
        track.style.transform = `translateX(-${index * width}px)`;
      }
    });
  }


  return (
    <div className="carousel-container">
  <div className="carousel-inner">  
    <div className="track">
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <CardNoImage headline='Headline' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </div>
      </div>
    </div>
  </div>
  <div className="nav">
    <button className="prev">
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    </button>
    <button className="next">
      <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    </button>
  </div>
</div>
  );
}

export { CarouselMultipleItems }