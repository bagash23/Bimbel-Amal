import React, { useState, createRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowForwardIos, ArrowForwardSharp, Close } from "@mui/icons-material";
import { Menu, Transition } from "@headlessui/react";
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
            <a href="#pablo">
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
                    (color === "white" ? "bg-white " : bgColor + " ") +
                    "text-base relative z-50 bg-white float-left py-2 list-none text-left rounded shadow-lg mt-1 flex-wrap grid grid-cols-2"
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
                    <ArrowForwardSharp sx={{fontSize: 12, marginLeft: 12}} />
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

function Dashboard() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {formOpen ? (
        <>
          <div className="lg:justify-center items-center lg:px-4 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div>
              {/*content*/}
              <div className="border-0 lg:rounded-lg lg:shadow-lg relative flex flex-col lg:w-auto lg:h-auto w-screen h-screen bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-bold">Donasi Amal</h3>
                  <button onClick={() => setFormOpen(false)}>
                    <Close sx={{ color: "#000" }} />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 lg:flex lg:flex-row">
                  <img
                    src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzs-inline.s3.ap-southeast-1.amazonaws.com%2Fproduction%2F6%2F53%2F876d%2F653876da35bb4cab9747e32cc2666b43.png%3Fefs%3Dhttps%253A%252F%252Fwww.zenius.net%252Fassets%252Fv-img%252F6%252F53%252F876d%252F653876da35bb4cab9747e32cc2666b43.png&w=1200&q=75"
                    alt="img-donasi"
                    className="lg:w-1/2 hidden lg:flex "
                  />
                  <form
                    className="mt-8 space-y-6 w-full lg:mx-10 lg:w-full"
                    action="#"
                    method="post"
                  >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px items-center">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Alamat Email
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Alamat Email"
                        />
                      </div>
                      <div>
                        <label htmlFor="nama" className="sr-only">
                          Nama Lengkap
                        </label>
                        <input
                          id="nama-lengkap"
                          name="name"
                          type="text"
                          className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm lg:my-5 my-5"
                          placeholder="Nama Lengkap"
                        />
                      </div>

                      <div>
                        <label htmlFor="nama" className="sr-only">
                          Nomor HP
                        </label>
                        <input
                          id="nomor-hp"
                          name="number"
                          type="number"
                          className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm lg:my-5 my-5"
                          placeholder="Nomor HP Aktif"
                        />
                      </div>
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Alamat Lengkap
                        </label>
                        <textarea
                          id="alamat"
                          rows="4"
                          class="appearance-none rounded-none relative block
                          w-full px-3 py-2 border border-gray-300
                          placeholder-gray-500 text-gray-900 rounded-b-md
                          focus:outline-none focus:ring-indigo-500
                          focus:border-indigo-500 focus:z-10 sm:text-sm lg:my-5 my-5"
                          placeholder="Alamat Lengkap..."
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center
                          py-2 px-4 border border-transparent text-sm font-medium
                          rounded-full text-white bg-indigo-600 hover:bg-indigo-700
                          focus:outline-none focus:ring-2 focus:ring-offset-2
                          focus:ring-indigo-500"
                      >
                        Kirim Data
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <Navbar />
      <div className="">
        <div className="lg:px-4 flex justify-center lg:justify-evenly items-center flex-col lg:flex-row py-3 ">
          <img
            src="https://buildwithangga.com/themes/front/images/mobile/hero/kelas_figma_flutter_online_gratis_buildwithangga.webp"
            className="lg:hidden flex w-full"
            alt="banner-mobile"
          />
          <div className="flex-col flex lg:mx-20 px-4 mt-4">
            <h5 className="text-primary font-semibold lg:text-xl text-xl">
              #BimbelAmal
            </h5>
            <h1 className="text-black font-bold lg:text-3xl text-xl ">
              Your Dream Career Starts With Us
            </h1>
            <h6 className="text-justify text-black font-normal lg:text-2xl text-lg lg:py-3 py-2 md:w-[80%]">
              Belajar sesuai arahan yang telah disusun baik oleh expert &
              komunitas yang supportive
            </h6>
            <div className="lg:flex-row flex-col flex lg:items-center lg:mt-10 mt-2">
              <div className="bg-primary rounded-full px-10 py-2 lg:mr-5 mb-2 cursor-pointer hover:shadow-primary hover:shadow-md hover:transition-shadow">
                <h2 className="text-white font-semibold lg:text-md text-lg text-center">
                  Alur Belajar
                </h2>
              </div>
              <div className="bg-secondary  rounded-full px-10 py-2 lg:mr-5 cursor-pointer hover:shadow-secondary hover:shadow-md hover:transition-shadow">
                <h2 className="text-black font-semibold lg:text-md text-lg text-center">
                  Panduan Pembelajaran
                </h2>
              </div>
            </div>
            <img
              src="https://buildwithangga.com/themes/front/images/landing-page/hero/companies-x-bwa.svg"
              className="lg:flex hidden lg:mt-10"
              alt="sponsor"
            />
          </div>
          <img
            src="https://www.zenius.net/_next/image/?url=https%3A%2F%2Fzs-inline.s3.ap-southeast-1.amazonaws.com%2Fproduction%2F6%2F53%2F876d%2F653876da35bb4cab9747e32cc2666b43.png%3Fefs%3Dhttps%253A%252F%252Fwww.zenius.net%252Fassets%252Fv-img%252F6%252F53%252F876d%252F653876da35bb4cab9747e32cc2666b43.png&w=1200&q=75"
            className="lg:w-1/2 hidden lg:flex "
            alt="banner"
          />
        </div>
        <div className="lg:mx-4 px-4 mt-5 flex lg:block flex-col lg:py-5 lg:justify-center">
          <h5 className="text-primary font-semibold lg:text-xl text-xl">
            Pembelajaran Bimbel Amal
          </h5>
          <h1 className="text-black font-semibold lg:text-4xl text-xl py-3 md:w-[40%]">
            Belajar sambil beramal dengan berbagai pembelajaran
          </h1>
          <div className="lg:flex-row lg:justify-between flex-row lg:flex items-center">
            <div className="bg-white lg:px-4 lg:py-5 shadow-md lg:w-auto lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col flex">
              <img
                src="https://buildwithangga.com/themes/front/images/thumbnail/thumbnail_roadmap-1.webp"
                alt="roadmap-1"
                className="lg:w-screen w-20 object-cover rounded-lg mr-5"
              />
              <div className="flex-col">
                <h1 className="text-black font-bold lg:text-1xl lg:py-3 py-3 lg:w-[50%]">
                  Berkarir Sebagai Freelancer UI/UX Website Designer
                </h1>
                <h3 className="text-red1 font-semibold text-sm">
                  Metode Belajar Live Streaming
                </h3>
              </div>
            </div>
            <div className="bg-white lg:px-4 lg:py-5 shadow-md lg:w-auto lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col flex">
              <img
                src="https://buildwithangga.com/themes/front/images/thumbnail/thumbnail_roadmap-2.webp"
                alt="roadmap-2"
                className="lg:w-screen w-20 object-cover rounded-lg mr-5"
              />
              <div className="flex-col">
                <h1 className="text-black font-bold lg:text-1xl lg:py-3 py-3 lg:w-[50%]">
                  Berkarir Sebagai Full-Stack JavaScript Developer
                </h1>
                <h3 className="text-red1 font-semibold text-sm">
                  Metode Belajar Live Streaming
                </h3>
              </div>
            </div>
            <div className="bg-white lg:px-4 lg:py-5 shadow-md lg:w-auto lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col flex">
              <img
                src="https://buildwithangga.com/themes/front/images/thumbnail/thumbnail_roadmap-3.webp"
                alt="roadmap-3"
                className="lg:w-screen w-20 object-cover rounded-lg mr-5"
              />
              <div className="flex-col">
                <h1 className="text-black font-bold lg:text-1xl lg:py-3 py-3 lg:w-[50%]">
                  Berkarir Sebagai Full-Stack Developer (Web/Mobile)
                </h1>
                <h3 className="text-red1 font-semibold text-sm">
                  Metode Belajar Live Streaming
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-4 px-4 mt-5 flex lg:block flex-col lg:py-5 lg:justify-center">
          <h5 className="text-primary font-semibold lg:text-xl text-xl">
            Mulai Belajar Sambil Beramal
          </h5>
          <h1 className="text-black font-semibold lg:text-4xl text-xl py-3 md:w-[40%]">
            Temui Kelas Bimbel Berdasarkan Kategori Yang Kami Sediakan
          </h1>
          <div className="lg:flex-row justify-between flex-wrap flex items-center">
            <div className="bg-white lg:px-4 lg:py-5 lg:shadow-md lg:w-80 w-1/2 lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col flex-col">
              <img
                src="https://buildwithangga.com/themes/front/images/ic_roadmap.svg"
                alt="roadmap-1"
                className="lg:w-20 w-10 object-cover rounded-lg mr-5"
              />
              <div className="flex-col flex py-2">
                <p className="text-black font-bold lg:text-md lg:py-3 leading-none">
                  Pilih Roadmap
                </p>
                <div className="lg:flex-row flex lg:justify-between lg:w-full">
                  <span className="text-black font-normal lg:text-sm text-base">
                    Alur belajar Bimbel
                  </span>
                  <div className="hidden lg:flex">
                    <ArrowForwardIos sx={{ fontSize: 20, color: "#000" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white lg:px-4 lg:py-5 lg:shadow-md lg:w-80 lg:mx-5 w-1/2 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col flex-col">
              <img
                src="https://buildwithangga.com/themes/front/images/ic_design.svg"
                alt="roadmap-1"
                className="lg:w-20 w-10 object-cover rounded-lg mr-5"
              />
              <div className="flex-col py-2">
                <p className="text-black font-bold lg:text-md lg:py-3 leading-none">
                  Design
                </p>
                <div className="lg:flex-row flex lg:justify-between lg:w-full">
                  <span className="text-black font-normal lg:text-sm text-base">
                    UI/UX Design
                  </span>
                  <div className="hidden lg:flex">
                    <ArrowForwardIos sx={{ fontSize: 20, color: "#000" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white lg:px-4 lg:py-5 lg:shadow-md lg:w-80 w-1/2 lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col flex-col">
              <img
                src="https://buildwithangga.com/themes/front/images/ic_appcode.svg"
                alt="roadmap-1"
                className="lg:w-20 w-10 object-cover rounded-lg mr-5"
              />
              <div className="flex-col py-2">
                <p className="text-black font-bold lg:text-md lg:py-3 leading-none">
                  Coding
                </p>
                <div className="lg:flex-row flex lg:justify-between lg:w-full">
                  <span className="text-black font-normal lg:text-sm text-base">
                    Website/Aplikasi
                  </span>
                  <div className="hidden lg:flex">
                    <ArrowForwardIos sx={{ fontSize: 20, color: "#000" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white lg:px-4 lg:py-5 lg:shadow-md lg:w-80 w-1/2 lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col flex-col">
              <img
                src="https://buildwithangga.com/themes/front/images/ic_softskills.svg"
                alt="roadmap-1"
                className="lg:w-20 w-10 object-cover rounded-lg mr-5"
              />
              <div className="flex-col py-2">
                <p className="text-black font-bold lg:text-md lg:py-3 leading-none">
                  Big Data
                </p>
                <div className="lg:flex-row flex lg:justify-between lg:w-full">
                  <span className="text-black font-normal lg:text-sm text-base">
                    Data Analiysis
                  </span>
                  <div className="hidden lg:flex">
                    <ArrowForwardIos sx={{ fontSize: 20, color: "#000" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-4 px-4 flex justify-center lg:justify-evenly items-center flex-col lg:flex-row py-3 ">
          <img
            src="https://buildwithangga.com/themes/front/images/landing-page/you-deserve-betteer-carrer.webp"
            alt="img-amal"
            className="lg:w-1/2 w-auto"
          />
          <div className="lg:flex-col mt-2 ">
            <h5 className="text-primary font-semibold lg:text-xl text-xl">
              Membuka Donasi
            </h5>
            <h1 className="text-black font-bold lg:text-4xl text-xl py-3">
              Bimbel Amal Membuka Galangan Dana Untuk Para Membutuhkan 😊
            </h1>
            <p className="text-black font-normal text-md lg:text-lg">
              Komunitas yang dibentuk ini untuk saling membantu sesama.
            </p>
            <button
              onClick={() => setFormOpen(!formOpen)}
              className="bg-primary lg:w-60 w-full rounded-full lg:mt-5 px-10 py-2 mt-5 lg:mr-5 mb-2 cursor-pointer hover:shadow-primary hover:shadow-md hover:transition-shadow"
            >
              <h2 className="text-white font-semibold lg:text-md text-lg text-center">
                Memberi Donasi
              </h2>
            </button>
          </div>
        </div>
        <footer class="lg:mx-4 mt-5 flex lg:block flex-col lg:py-5 lg:justify-center">
          <div class="mx-4 py-10 md:text-left">
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
                <h6 class=" font-semibold mb-4 flex md:justify-start">
                  Office
                </h6>
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
      </div>
    </>
  );
}

export default Dashboard;
