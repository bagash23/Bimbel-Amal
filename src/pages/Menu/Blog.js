import React, { useState, createRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, Transition } from "@headlessui/react";
import "../../App.css";
import { ArrowForwardSharp } from "@mui/icons-material";
import { createPopper } from "@popperjs/core";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar(color) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");

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
              <li className="nav-item">
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
                    // (color === "white" ? "bg-white " : bgColor + " ") +
                    "text-base relative bg-white z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 flex-wrap grid grid-cols-2"
                  }
                  style={{ minWidth: "20rem" }}
                >
                  <a
                    href="#pablo"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                      (color === "white" ? " text-slate-700" : "text-black")
                    }
                    onClick={(e) => e.preventDefault()}
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
                    <ArrowForwardSharp sx={{ fontSize: 12, marginLeft: 12 }} />
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <p className="ml-2">Event</p>
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
                  href="#pablo"
                >
                  <p className="ml-2">Kelas</p>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <p className="ml-2">Event</p>
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

function Blog() {
  const dataBlog = [
    {
      id: 1,
      name: "Beli Paket Zenius Double Untungnya!",
      thumbnile:
        "https://www.zenius.net/blog/wp-content/uploads/2022/11/Zenius-x-Huawei_Blog-Article-03-768x409.png",

    textKategori: "Ujian",
    pembuat: "By Eza Adsyah on November 3, 2022"
    },
    {
      id: 2,
      name: "Yuk, Dapatkan Panduan Lengkap untuk Menghadapi SNBT (UTBK) 2023!",
      thumbnile:
        "https://www.zenius.net/blog/wp-content/uploads/2022/10/Learning-Guide-SNBT_Blog-Banner-768x409.png",
        
    textKategori: "UTBK-SBMPTN",
    pembuat: "By Eva Jessica on October 25, 2022"
    },
    {
      id: 3,
      name: "Hanya dengan 12 Ribu, Kamu Bisa Ikut Satu Kali Try Out Premium Zenius! Yuk, Baca Info Lengkapnya!",
      thumbnile:
        "https://www.zenius.net/blog/wp-content/uploads/2022/10/Blog-Banner--768x408.png",
        textKategori: "Ujian",
        pembuat: "By Eva Jessica on October 14, 2022"
    },
  ];
  return (
    <>
      <Navbar />
      {/* content */}
      <div className="lg:flex-row lg:mx-10 flex-col w-auto lg:w-50 lg:justify-evenly lg:grid-cols-3 grid">
        {dataBlog.map((item) => {
          return (
            <div className="bg-white lg:px-4 lg:py-5 hover:shadow-md cursor-pointer lg:w-4/5 lg:h-auto lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 mx-5 lg:flex-col">
              <div className="flex-col items-center">
                <img
                  src={item.thumbnile}
                  alt="avatar-testi"
                  className="lg:w-screen w-full rounded-lg"
                />
                <div className="my-5">
                    <p className="font-normal text-base text-black mb-3" >{item.pembuat}</p>
                  <h1 className="text-black font-bold lg:text-lg">
                    {item.name}
                  </h1>
                  <h3 className="text-black font-semibold mt-5 bg-secondary px-2 py-2 rounded-lg lg:w-40 text-center">{item.textKategori}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* footer */}
      <footer class="lg:mx-4 mt-5 flex lg:block flex-col lg:py-5 lg:justify-center">
        <div class="mx-6 py-10 md:text-left">
          <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="">
              <h6
                class="
            
            font-semibold
            mb-4
            flex
            items-center
            
            md:justify-start
          "
              >
                <img
                  src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"
                  className="lg:w-50 w-10 py-3 lg:mr-5 mr-5"
                  alt="logo"
                />
                Bimbel Amal
              </h6>
              <p>
                Website untuk belajar design dan code dari mentor yang sangat
                berpengalaman di bidangnya masing-masing.
              </p>
            </div>
            <div class="">
              <h6 class=" font-semibold mb-4 flex md:justify-start">
                Start Your Career
              </h6>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Angular
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  React
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" class="text-gray-600">
                  Laravel
                </a>
              </p>
            </div>
            <div class="">
              <h6 class=" font-semibold mb-4 flex  md:justify-start">
                Useful links
              </h6>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Pricing
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Settings
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" class="text-gray-600">
                  Help
                </a>
              </p>
            </div>
            <div class="">
              <h6 class=" font-semibold mb-4 flex md:justify-start">Office</h6>
              <p class="flex items-center md:justify-start mb-4">
                PT.Bimbel Amal
              </p>
              <p class="flex items-center md:justify-start mb-4">
                bimbelAmal@example.com
              </p>
              <p class="flex items-center md:justify-start mb-4">
                + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
        <div class="text-center p-6">
          <span>© 2021 Copyright:</span>
          <a
            class="text-gray-600 font-semibold"
            href="https://tailwind-elements.com/"
          >
            Tailwind Elements
          </a>
        </div>
      </footer>
    </>
  );
}

export default Blog;
