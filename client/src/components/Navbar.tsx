import { Link } from "react-router-dom";
import { FC } from "react";

const Navbar: FC = () => {
  function handleNavbar() {
    const navbar = document.querySelector(".nav") as HTMLElement;
    navbar.classList.toggle("hidden");
  }

  return (
    <div>
      <nav className="relative w-full text-white bg-gray-900 shadow-lg xs:flex xs:justify-between xs:flex-wrap navbar:flex navbar:flex-row navbar:py-0">
        <div className="relative flex navbar:hidden">
          <Link to="/">
            <img className="logo" src="/logo.png" alt="Logo" />
          </Link>
        </div>

        <div className="relative xs:flex xs:flex-row navbar:hidden">
          <div>
            <Link to="/">
              <div className="inline-flex w-32 px-3 py-2 mr-3 border border-white rounded-md mt-7">
                <p className="mr-3 uppercase">Sign in</p>
                <img
                  className="w-6 h-6 py-0 mr-0"
                  src="/google.png"
                  alt="Sign in"
                />
              </div>
            </Link>
          </div>

          <div>
            <button
              className="order-last py-2 my-6 ml-3 mr-6"
              type="button"
              onClick={handleNavbar}
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
          </div>
        </div>

        <div className="relative justify-between hidden w-full xs:mx-3 navbar:ml-0 navbar:relative navbar:items-center navbar:divide-y-0 navbar:w-full navbar:px-6 navbar:flex-row navbar:flex nav navbar:container-fluid">
          <Link to="/" className="hidden navbar:block">
            <img className="logo" src="/logo.png" alt="Logo" />
          </Link>
          <ul className="navbar:flex navbar:divide-y-0 xs:divide-y navbar:flex-row">
            <div>
              <Link to="/">
                <li className="px-3 uppercase sm:py-2">Home</li>
              </Link>
            </div>
            <div>
              <Link to="activity">
                <li className="px-3 uppercase sm:py-2">Activy</li>
              </Link>
            </div>
            <div>
              <Link to="project">
                <li className="px-3 uppercase sm:py-2">Project</li>
              </Link>
            </div>
            <div>
              <Link to="blog">
                <li className="px-3 uppercase sm:py-2">Blog</li>
              </Link>
            </div>
            <div>
              <Link to="achievement">
                <li className="px-3 uppercase sm:py-2">Achievement</li>
              </Link>
            </div>
            <div>
              <Link to="about">
                <li className="pl-3 uppercase sm:py-2">About</li>
              </Link>
            </div>
          </ul>

          <div className="flex items-center">
            <Link
              to="/"
              className="relative hidden px-2 py-3 pl-2 border border-white rounded-md navbar:block"
            >
              <div className="inline-flex items-center">
                <p className="mr-3 uppercase">Sign in</p>
                <img className="w-6 h-6 mr-0" src="/google.png" alt="Sign in" />
              </div>
            </Link>

            <div className="mt-3 navbar:ml-3 xs:mb-3">
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
            <div className="flex flex-row mt-2">
              <img className="lg" src="/en.png" alt="English" />
              <img className="lg" src="/vn.png" alt="Deutsch" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
