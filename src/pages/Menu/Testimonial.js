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

function Testimonial() {
  const dataTesti = [
    {
      id: 1,
      nama: "Albert Avellino",
      position: "Content Publisher - Bank Central Asia",
      message:
        "Sesulit apapun pelajaran IPA, tapi karena cara penyampaian di Zenius itu jelas banget dan menarik, ilmu bisa terserap dengan gampang. Sebagai animator, gue juga harus bisa menyampaikan cerita atau informasi dengan menyenangkan. Gue belajar banyak dari Zenius buat bisa menjelaskan sesuatu yang sulit jadi lebih mudah dimengerti.",
      avatar:
        "https://www.zenius.net/_next/image/?url=https%3A%2F%2Fwww.zenius.net%2Fwp-content%2Fuploads%2F2020%2F08%2FAlbert-Avellino-300x300-1.jpg&w=128&q=75",
    },
    {
      id: 2,
      nama: "Dara Nursafira Rasyid",
      position: "Risk Advisor - Deloitte",
      message:
        "Berkat Zenius, dunia gue berasa langsung cerah gitu. Zenius bener-bener ngajarin gue banyak tentang hal-hal yang terjadi di dunia ini. Gue belajar gimana caranya mikir yang bener. Gue juga jadi bisa jelasin banyak hal secara logis dan saintifik. It’s not about how to answer things, but the proccess of coming up with the answers.",
      avatar:
        "https://www.zenius.net/_next/image/?url=https%3A%2F%2Fwww.zenius.net%2Fwp-content%2Fuploads%2F2020%2F11%2FDara-Nursafira-Rasyid.jpg&w=128&q=75",
    },
    {
      id: 3,
      nama: "Adli Wafi Jabbar",
      position: "Dokter Umum - RSIJ Cempaka Putih",
      message:
        "Saya tidak pernah ikut kursus di luar hanya dengan Zenius saja sudah lebih dari cukup. Nilai saya selalu menjadi 3 terbaik dikelas dari kelas 10 sampai kelas 12, sampai saya masuk FK tanpa tes karena nilai rapot saya diatas rata rata. Zenius itu program yang membantu saya meraih cita-cita saya menjadi dokter.",
      avatar:
        "https://www.zenius.net/_next/image/?url=https%3A%2F%2Fwww.zenius.net%2Fwp-content%2Fuploads%2F2020%2F11%2FAdli-Wafi-Jabbar.jpg&w=128&q=75",
    },
    {
      id: 4,
      nama: "Karinta Ariani Setiaputri",
      position: "SEO Content Writer - Hello Sehat",
      message:
        "Sebagai seorang SEO Content Writer, Zenius ngajarin aku gimana caranya menyampaikan/menjelaskan sesuatu dengan cara dan bahasa yang gampang dimengerti orang. Zenius itu bukan cuma tempat belajar yang seru, tapi juga bantu banget buat ningkatin pemahaman dasar tentang suatu hal.",
      avatar:
        "https://www.zenius.net/_next/image/?url=https%3A%2F%2Fwww.zenius.net%2Fwp-content%2Fuploads%2F2020%2F11%2FKarinta-Ariani-Setiaputri.jpg&w=128&q=75",
    },
    {
      id: 5,
      nama: "Mochamad Rifki",
      position: "Staff Kementerian Perencanaan Pembangunan Nasional",
      message:
        "Saya bersyukur sekali bisa kenal Zenius. Berkat Zenius, muncul keinginan dari diri saya untuk bisa berinovasi, menyelesaikan masalah disekitar, dan berkontribusi dalam banyak hal untuk menata masa depan.",
      avatar:
        "https://www.zenius.net/_next/image/?url=https%3A%2F%2Fwww.zenius.net%2Fwp-content%2Fuploads%2F2020%2F11%2FMochamad-Rifki.jpg&w=128&q=75",
    },
    {
      id: 6,
      nama: "Mohammad Rimba Putra",
      position: "Risk Analysis Unit - HSBC Commercial Banking",
      message:
        "Saya mulai menggunakan Zenius 10 tahun lalu. Dengerin penjelasan di Zenius itu enak banget, kayak kita diterangin langsung sama tutornya. Proses belajarnya kayak cerita, saya juga jadi semangat dan penasaran ngikutinnya.",
      avatar:
        "https://www.zenius.net/_next/image/?url=https%3A%2F%2Fwww.zenius.net%2Fwp-content%2Fuploads%2F2020%2F11%2FMohammad-Rimba-Putra.jpg&w=128&q=75",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="items-center justify-center my-5">
        <h1 className="text-black font-bold lg:text-4xl text-center ">
          Testimonial
        </h1>
        <p className="font-normal text-center lg:text-lg lg:block mx-5 lg:mt-4 lg:w-[30%] mx-auto">
          Gabung bersama kami demi membangun keahlian dan juga saling berbagi.
        </p>
      </div>
      <div className="lg:flex-row lg:mx-10 flex-col w-auto lg:w-50 lg:justify-evenly lg:grid-cols-3 grid">
        {dataTesti.map((item) => {
          return (
            <div className="bg-white lg:px-4 lg:py-5 shadow-md lg:w-4/5 lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col">
              <div className="flex lg:flex-row items-center">
                <img
                  src={item.avatar}
                  alt="avatar-testi"
                  className="lg:w-50 w-20 rounded-lg"
                />
                <div className="lg:mx-4 mx-3">
                  <h1 className="text-black font-bold lg:text-lg lg:grid-cols grid">
                    {item.nama}
                  </h1>
                  <h3 className="text-black font-semibold">{item.position}</h3>
                </div>
              </div>
              <p className="text-black font-normal text-sm my-5">
                {item.message}
              </p>
            </div>
          );
        })}
      </div>
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

export default Testimonial;
