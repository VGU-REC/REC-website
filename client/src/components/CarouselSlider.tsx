import { useState, useEffect, FC } from "react";

interface Props {
  show: number;
  children: {
    id: number;
    headline: string;
    description: string;
    src: string;
    alt: string;
  }[];
}

const CarouselSlider: FC<Props> = ({ show, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
    const slides = document.querySelectorAll(".slide");
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails[0].classList.add("bg-gray-300");
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
    thumbnails[id].classList.add("bg-gray-300");
    slides[id].classList.remove("hidden");
    let i: number;
    for (i = 0; i < slides.length; i++) {
      if (i !== id) {
        slides[i].classList.add("hidden");
        thumbnails[i].classList.remove("bg-gray-300");
      }
    }
  };

  return (
    <div>
      {children.map(({ headline, description, src, alt }) => (
        <div className="hidden pb-3 slide">
          <div>
            <div className="flex justify-center p-3">
              <div className="grid grid-cols-2 md:flex-row md:max-w-xl">
                <img className="h-48 m-3 w-96" src={src} alt={alt} />
                <div className="flex flex-col justify-start p-6">
                  <h5 className="mb-2 text-xl font-medium text-gray-900">
                    {headline}
                  </h5>
                  <p className="text-base text-gray-700">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div className="mb-3 ml-6 mr-6 bg-gray-100 carousel-content-wrapper rounded-xl">
          <div
            className={`carousel-content show-${show}  `}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children.map(({ id, headline, description, src, alt }) => (
              <div
                className="w-24 navbar:w-48"
                onClick={() => {
                  handleThumbnail(id);
                }}
              >
                <div className="flex justify-center pt-3 pb-3">
                  <div className="grid justify-center grid-cols-1 bg-white thumbnail">
                    <div className="flex justify-center">
                      <img className="w-12 h-12 mt-2" src={src} alt={alt} />
                    </div>

                    <div className="flex flex-col justify-center p-3 text-center">
                      <h5 className="text-xl font-medium text-gray-900">
                        {headline}
                      </h5>
                      <p className="text-base text-gray-700">{description}</p>
                    </div>
                  </div>
                </div>
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
