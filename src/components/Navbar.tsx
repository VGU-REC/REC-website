function Navbar() {
  return (
    <div>
      <nav className="
            bg-gray-900
            text-white
        ">
        <div className="grid grid-cols-3">
          <div className="pl-7">
                  <img className="logo" src="logo.png" alt="Logo" />
          </div>

          <div className="flex justify-end ml-0 mr-7 mt-9">
              <ul className="flex flex-row">
                <li className="px-3 uppercase">Home</li>
                <li className="px-3 uppercase">Activy</li>
                <li className="px-3 uppercase">Project</li>
                <li className="px-3 uppercase">Blog</li>
                <li className="px-3 uppercase">Achievement</li>
                <li className="px-3 uppercase">About</li>
                <li className="px-3 uppercase text-orange-500 flex-shrink-0">Sign in</li>
              </ul>
          </div>

          <div className="pl-3 pr-7">
            <div>
              <div className="flex justify-end mt-7">
                <div className="flex justify-center">
                  <div className="mb-2 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                      <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                      <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row mt-2">
                    <img className="lg" src="en.png" alt="English" />
                    <img className="lg" src="de.png" alt="Deutsch" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}

export { Navbar };