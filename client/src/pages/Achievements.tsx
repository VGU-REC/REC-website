import { CarouselSlider } from "components";
import { FC } from "react";

const Achievements: FC = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover header">
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden bg-fixed header2">
          <div className="flex items-center justify-center h-full">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-0 mb-6 text-5xl font-bold">ACHIEVEMENTS</h1>
              <h3 className="mb-8 text-3xl font-bold">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatAmet minim
              </h3>
            </div>
          </div>
        </div>
      </div>
      <CarouselSlider show={3}>
        {[
          {
            id: 0,
            headline: "Achivement 1",
            description: "Some quick example text.",
            src: "img1.jpg",
            alt: "alt",
          },
          {
            id: 1,
            headline: "Achivement 2",
            description: "Some quick example text.",
            src: "img2.jpg",
            alt: "alt",
          },
          {
            id: 2,
            headline: "Achivement 3",
            description: "Some quick example text.",
            src: "img3.jpg",
            alt: "alt",
          },
          {
            id: 3,
            headline: "Achivement 4",
            description: "Some quick example text.",
            src: "img4.jpg",
            alt: "alt",
          },
          {
            id: 4,
            headline: "Achivement 5",
            description: "Some quick example text.",
            src: "img5.jpg",
            alt: "alt",
          },
        ]}
      </CarouselSlider>
    </div>
  );
};

export { Achievements };
