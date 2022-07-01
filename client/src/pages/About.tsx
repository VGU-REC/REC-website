import { Avatar } from "components";
import { FC } from "react";

const About = () => {
  return (
    <div>
      <h1 className="pt-3 pb-7 text-4xl font-bold text-center">ABOUT US</h1>
      <div className="grid justify-items-center">
        <div className="text-center text-lg block w-96">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatAmet minim mollit non deserunt ullamco
          est sit aliqua dolor do amet sint.
        </div>
      </div>

      <div className="grid grid-cols-2 p-4 justify-items-center items-center">
        <div className="block w-3/4 text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatAmet minim mollit non deserunt ullamco
          est sit aliqua dolor do amet sint. Velit officia consequat.Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat.
        </div>
        <div className="">
          <img src="computer.png" className="mb-4 w-1/2 mx-auto" alt="Avatar" />
        </div>
      </div>
      <div className="grid justify-items-center items-center p-4">
        <div className="text-center text-lg w-3/4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint.
        </div>
      </div>

      <h4 className="font-medium leading-tight text-3xl mt-0 mb-2 text-center uppercase">
        Head members
      </h4>
      <div className="grid justify-items-center p-4">
        <div className="grid grid-cols-3 gap-28">
          <div>
            <Avatar
              img="marcus.png"
              name="Marcus Westervelt"
              position="Position"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
          </div>
          <div>
            <Avatar
              img="terry.png"
              name="Terry Baptista"
              position="Position"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
          </div>
          <div>
            <Avatar
              img="kadin.png"
              name="Kadin Korsgaard"
              position="Position"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
