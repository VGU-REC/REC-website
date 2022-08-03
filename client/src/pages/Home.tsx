import { Card, Carousel, CardNoImage } from "components";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-y-4 divide-black">
        <div>
          <h1 className="p-3 text-xl font-bold">ACTIVITY</h1>
        </div>
        <div>
          <div className="md:grid md:grid-cols-2">
            <div className="md:cols-2">
              <div className="pt-3">
                <CardNoImage
                  headline="Headline"
                  description="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
              </div>
              <div className="pt-3">
                <CardNoImage
                  headline="Headline"
                  description="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
              </div>
              <div className="pt-3">
                <CardNoImage
                  headline="Headline"
                  description="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
              </div>
            </div>
            <div className="md:cols-1">
              <Card
                image="img1.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                image="img2.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                image="img3.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
            </div>
          </div>

          <h1 className="p-3 text-xl font-bold">PROJECT</h1>
        </div>
        <div>
          <div className="md:grid md:grid-cols-2">
            <div className="md:cols-1">
              <Card
                image="img4.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                image="img5.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
            </div>
            <div className="md:cols-2">
              <Card
                image="img6.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                image="img7.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
            </div>
          </div>
          <h1 className="p-3 text-xl font-bold">BLOG</h1>
        </div>
        <div>
          <div className="pb-20 navbar:grid navbar:grid-cols-2">
            <div className="flex justify-center mt-3 mb-24 h-96 navbar:cols-1">
              <div className="pl-3">
                <img className="w-full h-96" src="img8.jpg" alt="" />
                <div className="flex flex-col p-6 text-center bg-white navbar:justify-start">
                  <h5 className="text-xl font-medium text-gray-900">
                    Headline
                  </h5>
                  <p className="mb-4 text-base text-gray-700">
                    Some quick example text to build on the card title and make
                    up the bulk of the card'scontent.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 navbar:grid-cols-2">
              <Card
                image="img9.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
              <Card
                image="img10.jpg"
                alt="Image"
                headline="Headline"
                description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
