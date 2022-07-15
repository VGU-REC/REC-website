import { Card, Carousel, Pagination } from "components";
import { FC } from "react";

const RecruitingProjects = () => {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-y-4 divide-black">
        <div>
          <h1 className="p-3 text-xl font-bold">RECRUIT PROJECT</h1>
        </div>
        <div className="p-3">
          <Card
            image="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt="Image"
            headline="Headline"
            description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <Card
            image="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt="Image"
            headline="Headline"
            description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
          <Card
            image="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt="Image"
            headline="Headline"
            description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </div>
      </div>
      {/* <Pagination /> */}
    </div>
  );
};

export { RecruitingProjects };
