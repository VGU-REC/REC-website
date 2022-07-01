import { FC } from "react";

interface Props {
  name: string;
  position: string;
  description: string;
  img: string;
}

const Avatar: FC<Props> = ({ name, position, description, img }) => {
  return (
    <div>
      <div className="text-center">
        <img
          src={img}
          className="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 className="text-xl font-medium leading-tight mb-2">{name}</h5>
        <p className="text-gray-500">{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { Avatar };
