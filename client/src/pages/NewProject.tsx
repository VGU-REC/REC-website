import { FC } from "react";

const NewProject: FC = () => {
  return (
    <div className="m-3">
      <div className="flex justify-center">
        <div className="bg-gray-100 p-3">
          <form>
            <h1 className="pt-3 text-2xl text-center">RECRUIT FORM</h1>
            <h4 className="container text-center">
              Amet minim mollit non deserunt ullamco est sit aliquatgo dolor do
              amet sint.
              <br /> Velit officia consequat Amet minimuu mollit non deserunt
              ullamco.
            </h4>
            <div className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 w-96 pt-2">
                <label className="px-2">Facebook link:</label>
                <input className="border border-black px-2" type="text" />
              </div>
              <div className="grid grid-cols-1 w-96 pt-2">
                <label className="px-2">Phone number:</label>
                <input className="border border-black px-2" type="text" />
              </div>
              <div className="grid grid-cols-1 w-96 pt-2">
                <label className="px-2">
                  Short introduction about yourself:
                </label>
                <textarea className="border border-black px-2" cols={5} />
              </div>
              <div className="grid grid-cols-1 w-96 pt-2">
                <label className="px-2">
                  Short introduction about your project:
                </label>
                <textarea className="border border-black px-2" />
              </div>

              <div className="flex flex-row pt-2 w-96">
                <label className="px-2">Number of members required:</label>
                <input className="border border-black px-2 w-1/4" type="text" />
              </div>
              <div className="w-96 pt-2">
                <button className="bg-black border-black text-white w-full py-2">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { NewProject };
