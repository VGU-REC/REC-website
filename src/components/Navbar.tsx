import React from 'react';
function Navbar() {
  return (
    <div>
        <nav className="
            relative
            w-full
            flex flex-wrap
            items-center
            justify-between
            py-4
            bg-gray-900
            text-gray-100
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            navbar navbar-expand-lg navbar-light
        ">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <a className="text-xl text-white" href="#">Navbar</a>
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item px-2">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item pr-2">
                            <a className="nav-link text-gray-100 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Features</a>
                        </li>
                        <li className="nav-item pr-2">
                            <a className="nav-link text-gray-100 hover:text-gray-700 focus:text-gray-700 p-0" href="#">Pricing</a>
                        </li>
                        <li className="nav-item pr-2">
                            <a className="nav-link disabled text-gray-300 p-0">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
