import { Card, Carousel, CardNoImage } from "components";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className="text-xl p-3 font-bold">ACTIVITY</h1>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <div className="cols-1">
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
            <div className="cols-2">
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
          </div>

          <h1 className="text-xl p-3 font-bold">PROJECT</h1>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <div className="cols-1">
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
            <div className="cols-2">
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
          <h1 className="text-xl p-3 font-bold">BLOG</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 pb-20">
            <div className="h-96 flex justify-center mt-3">
              <div className="pl-3">
                <img className="w-full h-96" src="img8.jpg" alt="" />
                <div className="p-6 flex flex-col justify-start bg-white">
                  <h5 className="text-gray-900 text-xl font-medium">
                    Headline
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card'scontent.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3">
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
