import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, Transition } from "@headlessui/react";
import "../../App.css";
import { Star } from "@mui/icons-material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

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
                <a
                  className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md text-black font-semibold leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <p className="ml-2">Promo</p>
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
                  href="#pablo"
                >
                  <p className="ml-2">Testimonial</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                  href="#pablo"
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
                  <h1 className="ml-2">Program</h1>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md text-black font-semibold leading-snug  hover:opacity-75"
                  href="#pablo"
                >
                  <p className="ml-2">Promo</p>
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
                  href="#pablo"
                >
                  <p className="ml-2">Testimonial</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:py-0 py-2 lg:px-3 px-0 flex items-center text-md  text-black font-semibold leading-snug  hover:opacity-75"
                  href="#pablo"
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

function FlashSale() {
  const [fadeProp, setFadeProp] = useState({
    fade: "Fade-in",
  });

  useEffect(() => {
    const timeOut = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [fadeProp]);

  const flashSale = [
    {
      id: 1,
      title: "Build Your Personal Branding on Socmed & Boost Your Career",
      thumbnile:
        "https://buildwithangga.com/storage/assets/thumbnails/o7dosm6h-Thumbnail%20BWAPB.png",
      promo: "Rp.50.000",
      price_real: "Rp.199.000",
      Rate: "931",
      guru: "https://assets.pikiran-rakyat.com/crop/658x34:1741x1051/x/photo/2021/12/20/2821040788.jpg",
    },

    {
      id: 2,
      title: "Full-Stack Web Developer",
      thumbnile:
        "https://buildwithangga.com/storage/assets/thumbnails/a9y2g6k0-2Thumbnail.png",
      promo: "Rp.200.000",
      price_real: "Rp.650.000",
      Rate: "1.000",
      guru: "	https://buildwithangga.com/storage/assets/images/avatars/galih-pratama-buildwithangga.png",
    },

    {
      id: 3,
      title:
        "UX Brainstorming dengan InVision App",
      thumbnile:
        "	https://buildwithangga.com/storage/assets/thumbnails/ux_brainstorm_thumb.png",
      promo: "Rp.200.000",
      price_real: "Rp.650.000",
      Rate: "17.000",
      guru: "https://buildwithangga.com/storage/assets/images/avatars/galih-pratama-buildwithangga.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="justify-center items-center lg:my-5 lg:flex-col">
        <h1 className="font-bold text-center lg:text-2xl hidden lg:block">
          Flash Sale
        </h1>
        <p className="font-normal text-center lg:text-lg hidden lg:block lg:mt-4 ">
          Belajar dengan mentor expert dengan harga yang lebih terjangkau
          😎
        </p>
      </div>
      <div className="lg:ml-20 justify-center flex-col lg:mt-20 px-4 py-3">
        <h2 className="text-primary font-semibold lg:text-xl text-xl">
          Best Sale Ever
        </h2>
        <h1 className="text-black font-bold lg:text-4xl text-xl">
          Belajar Jadi Lebih Mudah & Asyik
        </h1>
        <div className="lg:flex-row flex-col w-auto lg:w-50 lg:justify-evenly lg:grid-cols-3 grid">
          {flashSale.map((item) => {
            return (
              <div className="bg-white lg:px-4 lg:py-5 shadow-md lg:w-4/5 lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col">
                <div className="flex lg:flex-col">
                  <img
                    src={item.thumbnile}
                    alt="roadmap-1"
                    className="lg:w-screen w-20 object-cover rounded-lg mr-5"
                  />
                  <div className="flex-col">
                    <h1 className="text-black font-bold lg:text-2xl lg:py-3 py-3 lg:grid-cols grid">
                      {item.title}
                    </h1>
                    <div className="flex flex-row items-center">
                      <h3 className={fadeProp.fade}>{item.price_real}</h3>
                      <h3 className="text-red1 font-semibold ml-2">
                        {item.promo}
                      </h3>
                    </div>
                    <div className="flex-row lg:flex hidden mt-5 justify-between items-center">
                      <div className="flex-row flex">
                        <Star sx={{ color: "#FFB200" }} />
                        <Star sx={{ color: "#FFB200" }} />
                        <Star sx={{ color: "#FFB200" }} />
                        <Star sx={{ color: "#FFB200" }} />
                        <Star sx={{ color: "#FFB200" }} />
                        <h3 className="px-3">{( item.Rate )}</h3>
                      </div>
                      <img
                        src="https://www.buildwithangga.com/themes/front/images/ic_lv_hard.svg"
                        alt="koneksi"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:hidden flex-row flex justify-between mt-5 items-center">
                  <div className="flex-row flex">
                    <Star sx={{ color: "#FFB200" }} />
                    <Star sx={{ color: "#FFB200" }} />
                    <Star sx={{ color: "#FFB200" }} />
                    <Star sx={{ color: "#FFB200" }} />
                    <Star sx={{ color: "#FFB200" }} />
                    <h3 className="px-3">{( item.Rate )}</h3>
                  </div>
                  <img
                    src={item.guru}
                    className="w-7 h-7 rounded-full"
                    alt="avatar"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer class="lg:mx-4 px-4 mt-5 flex lg:block flex-col lg:py-5 lg:justify-center">
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

export default FlashSale;
