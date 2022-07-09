import { FC } from "react";

interface content {
  image: string;
  alt: string;
  headline: string;
  description: string;
  height?: number;
}

const Card: FC<content> = ({ image, alt, headline, description, height }) => {
  return (
    <div>
      <div className="flex justify-center p-3">
        <div className="grid grid-cols-2 md:flex-row md:max-w-xl bg-white shadow-lg">
          <img className="w-96 h-48 m-3" src={image} alt={alt} />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {headline}
            </h5>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
