import { CardNoImage, Carousel, Pagination } from "components";
import { FC } from "react";

const Activities: FC = () => {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 divide-y-4 divide-black">
        <div>
          <h1 className="p-3 text-xl font-bold">ACTIVITY</h1>
        </div>
        <div className="grid gap-2 grid-row">
          <CardNoImage
            headline="Headline"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />

          <CardNoImage
            headline="Headline"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />

          <CardNoImage
            headline="Headline"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
      </div>
      {/* <Pagination /> */}
    </div>
  );
};

export { Activities };
