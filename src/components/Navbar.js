import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import { ArrowForwardSharp } from "@mui/icons-material";
import { Menu, Transition } from "@headlessui/react";
// import { createPopper } from "@popperjs/core";
// import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar(color) {

    // const matchPath = useLocation()
    const [navbarOpen, setNavbarOpen] = useState(false);
  
    // const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    // const btnDropdownRef = createRef();
    // const popoverDropdownRef = createRef();
    // const openDropdownPopover = () => {
    //   createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
    //     placement: "bottom-start",
    //   });
    //   setDropdownPopoverShow(true);
    // };
    // const closeDropdownPopover = () => {
    //   setDropdownPopoverShow(false);
    // };
    // // bg colors
    // let bgColor;
    // color === "white"
    //   ? (bgColor = "bg-slate-700")
    //   : (bgColor = "bg-" + color + "-500");
  
    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-full lg:static lg:flex-row lg:justify-start lg:py-3">
              <a href="/">
                <img
                  src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"
                  className="lg:w-50 w-10 py-3"
                  alt="logo"
                />
              </a>
              <ul className="lg:flex-row lg:flex hidden list-none lg:mx-auto lg:items-center  ">
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md text-black font-semibold   hover:opacity-75"
                    href="sale"
                  >
                    <h1 className="ml-2">Flash Sale</h1>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <button
                    className={
                      "text-black font-semibold text-md px-6 ease-linear transition-all duration-150 inline-flex justify-center w-full" +
                      bgColor
                    }
                    type="button"
                    ref={btnDropdownRef}
                    onClick={() => {
                      dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                    }}
                  >
                    <h1 className="ml-2">Kelas</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2 -mr-1 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                        fill="black"
                      />
                    </svg>
                  </button>
                  <div
                    ref={popoverDropdownRef}
                    className={
                      (dropdownPopoverShow ? "block " : "hidden ") +
                      (color === "white" ? "bg-white " : bgColor + " ") +
                      "text-base relative z-50 bg-white float-left py-2 list-none text-left rounded shadow-lg mt-1 flex-wrap grid grid-cols-2"
                    }
                    style={{ minWidth: "20rem" }}
                  >
                    <a
                      href={`${matchPath.pathname}/sd`}
                      className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                        (color === "white" ? " text-slate-700" : "text-black")
                      }
                    >
                      SD Belajar
                    </a>
                    <a
                      href="#pablo"
                      className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                        (color === "white" ? " text-slate-700" : "text-black")
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      SMP Belajar
                    </a>
                    <a
                      href="#pablo"
                      className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                        (color === "white" ? " text-slate-700" : "text-black")
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      SMK Belajar
                    </a>
                    <a
                      href="#pablo"
                      className={
                        "text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent inline-flex" +
                        (color === "white" ? " text-slate-700" : "text-black")
                      }
                      onClick={(e) => e.preventDefault()}
                    >
                      Lainnya
                      <ArrowForwardSharp sx={{fontSize: 12, marginLeft: 12}} />
                    </a>
                  </div>
                </li> */}
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md text-black font-semibold leading-snug  hover:opacity-75"
                    href="katalog"
                  >
                    <p className="ml-2">Kelas</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                    href="testimonials"
                  >
                    <p className="ml-2">Testimonial</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                    href="blog"
                  >
                    <p className="ml-2">Blog</p>
                  </a>
                </li>
              </ul>
              <div className="items-center lg:flex hidden">
                <div className="bg-secondary  rounded-full px-5 py-2 cursor-pointer">
                  <h2 className="text-black font-semibold lg:text-sm text-center">
                    Masuk/Daftar
                  </h2>
                </div>
              </div>
              <button
                className="cursor-pointer rounded-lg lg:hidden "
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <MenuIcon sx={{ fontSize: 30, color: "#000" }} />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center lg:hidden">
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md text-black font-semibold leading-snug  hover:opacity-75"
                    href="sale"
                  >
                    <h1 className="ml-2">Flash Sale</h1>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md text-black font-semibold leading-snug  hover:opacity-75"
                    href="katalog"
                  >
                    <p className="ml-2">Kelas</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                    href="testimonials"
                  >
                    <p className="ml-2">Testimonial</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                    href="blog"
                  >
                    <p className="ml-2">Blog</p>
                  </a>
                </li>
  
                <li className="nav-item">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full lg:px-3 px-0 py-2 rounded-md shadow-sm  focus:outline-none">
                        <img
                          src="https://assets.pikiran-rakyat.com/crop/658x34:1741x1051/x/photo/2021/12/20/2821040788.jpg"
                          className="w-7 h-7 rounded-full"
                          alt="avatar"
                        />
                        <div className="flex-col text-left px-5">
                          <span className="text-base text-black font-semibold">
                            Bagas Haryadi
                          </span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-2 -mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                            fill="black"
                          />
                        </svg>
                      </Menu.Button>
                    </div>
  
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute lg:w-full lg:ml-0 ml-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full text-left px-4 py-2 text-sm"
                                )}
                              >
                                Akun
                              </button>
                            )}
                          </Menu.Item>
  
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full text-left px-4 py-2 text-sm"
                                  )}
                                >
                                  Keluar
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

export default Navbar