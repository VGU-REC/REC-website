import { Link } from "react-router-dom";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between w-full text-white bg-gray-900 shadow-lg navbar navbar-expand-lg">
        <div className="flex flex-wrap items-center justify-between w-full px-6 sm:py-3 md:py-0 container-fluid">
          <button
            className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="items-center flex-grow collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <div className="md:pl-7">
              <Link to="/">
                <img className="logo" src="/logo.png" alt="Logo" />
              </Link>
            </div>

            <div className="flex md:justify-end md:mt-7 md:mx-7 sm:mb-7">
              <ul className="flex flex-col navbar-nav list-style-none">
                <Link to="/">
                  <li className="px-3 uppercase sm:py-2">Home</li>
                </Link>
                <Link to="activity">
                  <li className="px-3 uppercase sm:py-2">Activy</li>
                </Link>
                <Link to="project">
                  <li className="px-3 uppercase sm:py-2">Project</li>
                </Link>
                <Link to="blog">
                  <li className="px-3 uppercase sm:py-2">Blog</li>
                </Link>
                <Link to="achievement">
                  <li className="px-3 uppercase sm:py-2">Achievement</li>
                </Link>
                <Link to="about">
                  <li className="px-3 uppercase sm:py-2">About</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="relative flex items-center pl-3 pr-7 ">
            <div>
              <div className="flex justify-end">
                <div className="flex justify-center">
                  <Link
                    to="/"
                    className="relative w-32 bg-orange-800 border border-white"
                  >
                    <button className="px-4 py-0 mt-1 uppercase">
                      <div className="inline-flex items-center">
                        <p className="flex-shrink-0 uppercase">Sign in</p>
                        <img
                          className="inline w-8 h-8 m-3"
                          src="/google.png"
                          alt="Sign in"
                        />
                      </div>
                    </button>
                  </Link>

                  <div className="mt-3 ml-3 xl:w-96">
                    <div className="relative flex flex-wrap items-stretch w-full rounded input-group">
                      <input
                        type="search"
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <span
                        className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                        id="basic-addon2"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          className="w-4"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row mt-5">
                    <img className="lg" src="/en.png" alt="English" />
                    <img className="lg" src="/vn.png" alt="Deutsch" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
