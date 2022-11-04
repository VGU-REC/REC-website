import { Card, Carousel, Pagination } from "components";
import { FC } from "react";

const Blogs: FC = () => {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-black divide-y-4">
        <div>
          <h1 className="text-xl p-3 font-bold">BLOG</h1>
        </div>
        <div className="p-3">
          <Card
            image=  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
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
      <Pagination />
    </div>
  );
};

export { Blogs };
