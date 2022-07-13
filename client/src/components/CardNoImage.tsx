import { FC } from "react";

interface content {
  headline: string;
  description: string;
}

const CardNoImage: FC<content> = ({ headline, description }) => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="block max-w-sm p-6 bg-white rounded-lg shadow-lg">
          <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
            {headline}
          </h5>
          <p className="mb-2 text-base text-gray-700">{description}</p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-orange-400 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardNoImage };
