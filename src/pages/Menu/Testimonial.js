import React from "react";
import Navbar from "../../components/Navbar";

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
        <p className="font-normal text-center lg:text-lg lg:block mx-5 lg:mt-4 lg:w-[30%] lg:mx-auto">
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
