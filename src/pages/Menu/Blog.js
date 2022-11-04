import React from "react";
import Navbar from "../../components/Navbar";

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
    {
      id: 4,
      name: "Info Lengkap Tentang Aturan Baru Seleksi Masuk PTN 2023",
      thumbnile:"https://www.zenius.net/blog/wp-content/uploads/2022/09/Copy-of-INFO-768x409.jpg",
        textKategori: "Zenius Kampus",
        pembuat: "By Eva Jessica on September 13, 2022"
    },
    {
      id: 5,
      name: "Rekomendasi Paket Belajar Zenius yang Cocok Buat Kamu",
      thumbnile:"	https://www.zenius.net/blog/wp-content/uploads/2022/06/PAKET-BELAJAR-ILLUSTRATION.png",
        textKategori: "Kuis",
        pembuat: "By Eza Adsyah on June 17, 2022"
    },
    {
      id: 6,
      name: "Kuis: Kampus Mana yang Cocok Buat Lo?",
      thumbnile:"https://www.zenius.net/blog/wp-content/uploads/2022/05/thumbnail-quiz-1200x600-30-768x384-1.png",
        textKategori: "Kuis",
        pembuat: "By Eza Adsyah on May 11, 2022"
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
