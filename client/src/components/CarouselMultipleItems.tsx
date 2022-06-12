import { CardNoImage } from "./CardNoImage";
import { useState } from "react";

function CarouselMultipleItems() {
  const show = 3;
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = 16;
  const next = () => {
    if (currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  return (
    <div>
      <div className="carousel-wrapper">
          {
              currentIndex > 0 &&
              <button onClick={prev} className="left-arrow">
                  &lt;
              </button>
          }
        <div className="carousel-content-wrapper">
          <div
              className={`carousel-content show-${show}`}
              style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
          >   
                <CardNoImage headline='Project 1' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 2' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 3' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 4' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 5' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 6' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 7' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 8' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 9' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 10' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 11' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 12' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 13' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 14' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 15' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

                <CardNoImage headline='Project 16' description="Some quick example text to build on the card title and make up the bulk of the card's content."/>   
          </div>
        </div>
          {
              currentIndex < (length - show) &&
              <button onClick={next} className="right-arrow">
                  &gt;
              </button>
          }
      </div>
    </div>
  );
}

export {CarouselMultipleItems}