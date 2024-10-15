/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <h3
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Eveil Tunisien
            </h3>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a>
                  <img
                    src="logopro-removebg-preview.png" // Replace with the actual path to the Tunisia flag image
                    alt="Tunisia Flag"
                    className="w-6 h-6 inline-block ml-2" // You can adjust the width and height as needed
                    width={"50"}
                  />
                  <span className="lg:hidden inline-block ml-2">Tunisia</span>
                </a>
              </li>

              <li className="flex items-center">
                <a>
                  <img
                    src="tun.png" // Replace with the actual path to the Tunisia flag image
                    alt="Tunisia Flag"
                    className="w-6 h-6 inline-block ml-2" // You can adjust the width and height as needed
                    width={"50"}
                  />
                  <span className="lg:hidden inline-block ml-2">Tunisia</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
