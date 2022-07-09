import { CardNoImage } from "./CardNoImage";
import { useState, useEffect, FC } from "react";

interface Props {
  show: number;
  children: { headline: string; description: string }[];
}

// type Props = {
//   show: number;
//   children: JSX.Element[];
// }

const CarouselMultipleItems: FC<Props> = ({ show, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  useEffect(() => {
    setLength(children.length);
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

  return (
    <div>
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
            {children.map(({ headline, description }) => (
              <CardNoImage headline={headline} description={description} />
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

export { CarouselMultipleItems };
