import { Avatar } from "components";
import { FC } from "react";

const About = () => {
  return (
    <div>
      <h1 className="pt-3 text-4xl font-bold text-center pb-7">ABOUT US</h1>
      <div className="grid justify-items-center">
        <div className="block text-lg text-center w-96">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatAmet minim mollit non deserunt ullamco
          est sit aliqua dolor do amet sint.
        </div>
      </div>

      <div className="grid items-center grid-cols-2 p-4 justify-items-center">
        <div className="block w-3/4 text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatAmet minim mollit non deserunt ullamco
          est sit aliqua dolor do amet sint. Velit officia consequat.Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat.
        </div>
        <div className="">
          <img src="computer.png" className="w-1/2 mx-auto mb-4" alt="Avatar" />
        </div>
      </div>
      <div className="grid items-center p-4 justify-items-center">
        <div className="w-3/4 text-lg text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua
          dolor do amet sint. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint.
        </div>
      </div>

      <h4 className="mt-0 mb-2 text-3xl font-medium leading-tight text-center uppercase">
        Head members
      </h4>
      <div className="grid p-4 justify-items-center">
        <div className="md:grid md:grid-cols-3 md:gap-28">
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
