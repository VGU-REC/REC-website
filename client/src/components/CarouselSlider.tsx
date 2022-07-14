import { useState, useEffect, FC } from "react";
import { Card } from "./Card";
import { CardNoImage } from "./CardNoImage";

interface Props {
  show: number;
  children: {
    id: number;
    headline: string;
    description: string;
    src: string;
  }[];
}

const CarouselSlider: FC<Props> = ({ show, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails[0].classList.add("bg-orange-200");
    slides[0].classList.remove("hidden");
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleThumbnail = (id: number) => {
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails[id].classList.add("bg-orange-200");
    slides[id].classList.remove("hidden");
    let i: number;
    for (i = 0; i < slides.length; i++) {
      if (i !== id) {
        slides[i].classList.add("hidden");
        thumbnails[i].classList.remove("bg-orange-200");
      }
    }
  };

  return (
    <div>
      {children.map(({ headline, description, src }) => (
        <div className="hidden pb-3 slide">
          <Card
            image={src}
            alt="alt"
            headline={headline}
            description={description}
          />
        </div>
      ))}

      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children.map(({ id, headline, description }) => (
              <div
                className="pt-3 pb-3 thumbnail"
                onClick={() => {
                  handleThumbnail(id);
                }}
              >
                <CardNoImage headline={headline} description={description} />
              </div>
            ))}
          </div>
        </div>
        {currentIndex < length - show && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export { CarouselSlider };
