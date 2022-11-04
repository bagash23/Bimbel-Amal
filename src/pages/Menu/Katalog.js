import { Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ReactPlayer from "react-player";

function Katalog() {
  const [listBanner, setListBanner] = useState({
    list: [
      {
        id: 1,
        thumbnail:
          "https://roboguru-forum-cdn.ruangguru.com/image/71159c9c-7539-457f-9891-4610664c315f.png",
        title: "Sukses PTS, PAS, dan UTBK dengan ruanguji",
        paragraf:
          "Persiapkan dirimu hadapi ujian dengan tryout di ruanguji oleh bimbel terbaik Ruangguru",
        listVideo: [
          {
            id: 1,
            title: "Apa Itu Ilmu Biologi? | Video ruangbelajar Kelas 10 SMA",
            thumbnile:
              "https://i.ytimg.com/vi/Mc8oBoCLajA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPRKwwR1Bt4DrbTVJ3OQvsqhUW6Q",
            guru: "Bimbel Amal",
            urlVid: "https://www.youtube.com/watch?v=Mc8oBoCLajA",
            tanggal: "By Bimbel Amal On 20 November 2021",
          },
          {
            id: 2,
            title:
              "Bantu Temukan Unsur-Unsur Bola Yuk! | Belajar Matematika Bersama Dafa dan Lulu - 6 SD",
            thumbnile:
              "https://i.ytimg.com/vi/k0BVPnh6m6Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUAdEx9l0-7fVa5ci_OAUWDhPfLQ",
            guru: "Daffa",
            urlVid: "https://www.youtube.com/watch?v=k0BVPnh6m6Q",
            tanggal: "By Bimbel Amal On 20 November 2021",
          },
          {
            id: 3,
            title:
              "Menghitung Perkalian | Belajar Matematika Bersama Dafa dan Lulu - 3 SD",
            thumbnile:
              "https://i.ytimg.com/vi/zWNyYabTh9E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTrMQLA8AafLyjnqrLr07KsGKG9A",
            guru: "Daffa",
            urlVid: "https://www.youtube.com/watch?v=zWNyYabTh9E",
            tanggal: "By Bimbel Amal On 20 November 2021",
          },
          {
            id: 4,
            title:
              "Menghitung Perkalian | Belajar Matematika Bersama Dafa dan Lulu - 3 SD",
            thumbnile:
              "https://i.ytimg.com/vi/zWNyYabTh9E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTrMQLA8AafLyjnqrLr07KsGKG9A",
            guru: "Daffa",
            urlVid: "https://www.youtube.com/watch?v=zWNyYabTh9E",
            tanggal: "By Bimbel Amal On 20 November 2021",
          },
        ],
      },
      {
        id: 2,
        thumbnail:
          "https://roboguru-forum-cdn.ruangguru.com/image/012f9c78-8648-4fb6-804e-2b5eb4cea368.png",
        title: "Sukses PTS, PAS, dan UTBK dengan ruanguji",
        paragraf:
          "Persiapkan dirimu hadapi ujian dengan tryout di ruanguji oleh bimbel terbaik Ruangguru",
        listVideo: [
          {
            id: 1,
            title:
              "Mengukur Panjang Benda Bersama Dafa, Made dan Bona Yuk! | Video Matematika Bersama Dafa Lulu - 2 SD",
            thumbnile:
              "https://i.ytimg.com/vi/8csB-Xq0okw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDZyuuFC_1tRGFoPZZuKDM7Qoo1g",
            guru: "Daffa",
            urlVid: "https://www.youtube.com/watch?v=8csB-Xq0okw",
            tanggal: "By Bimbel Amal On 20 November 2021",
          },
          {
            id: 2,
            title:
              "Bantu Temukan Unsur-Unsur Bola Yuk! | Belajar Matematika Bersama Dafa dan Lulu - 6 SD",
            thumbnile:
              "https://i.ytimg.com/vi/k0BVPnh6m6Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUAdEx9l0-7fVa5ci_OAUWDhPfLQ",
            guru: "Daffa",
            urlVid: "https://www.youtube.com/watch?v=k0BVPnh6m6Q",
            tanggal: "By Bimbel Amal On 20 November 2021",
          },
          {
            id: 3,
            title:
              "Menghitung Perkalian | Belajar Matematika Bersama Dafa dan Lulu - 3 SD",
            thumbnile:
              "https://i.ytimg.com/vi/zWNyYabTh9E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTrMQLA8AafLyjnqrLr07KsGKG9A",
            guru: "Daffa",
            urlVid: "https://www.youtube.com/watch?v=zWNyYabTh9E",
            tanggal: "By Bimbel Amal On 20 November 2021",
          },
        ],
      },
    ],
  });

  const [idActive, setIdActive] = useState(null);
  console.log(idActive, "LOG ACTIVE");

  useEffect(() => {
    setIdActive(listBanner.list[0].id);
  }, []);
  const findActive = listBanner.list.find((item) => item.id === idActive);

  return (
    <>
      <Navbar />
      <div className="flex-col lg:flex-row justify-center lg:justify-center px-4 mx-auto items-center lg:my-5 grid lg:grid-cols-2">
        {listBanner.list.map((item) => {
          return (
            <div
              onClick={() => setIdActive(item.id)}
              className=" cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md  lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-row flex flex-col items-center"
            >
              <img
                src={item.thumbnail}
                alt="avatar-testi"
                className="lg:w-[30%] w-[50%]"
              />
              <div className="flex-col my-2 lg:my-0 mx-auto">
                <h1 className="text-white font-bold lg:text-lg lg:w-[220px]">
                  {item.title}
                </h1>
                <p className="text-white font-normal text-sm my-2 lg:w-[300px]">
                  {item.paragraf}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:ml-20 justify-center flex-col px-4 py-3" >
          <h1 className="font-semibold text-primary lg:text-1xl text-lg" >Mata Pembelajaran</h1>
          <p className="text-black font-bold lg:text-4xl text-xl lg:w-[25%] w-[70%]">
          Daftar Pembelajaran Bimbel Yang Tersedia
        </p>
      </div>
      <div className="lg:flex-row lg:mx-10 flex-wrap grid-cols-2 w-auto lg:w-50 lg:justify-evenly lg:grid-cols-3 grid">
        {findActive?.listVideo.map((item) => {
          return (
            <div className="bg-white lg:px-4 lg:py-5 lg:shadow-md lg:w-4/5 lg:mx-5 lg:my-5 rounded-lg mb-5 mt-5 py-5 px-4 lg:flex-col">
              <img
                src={item.thumbnile}
                alt="avatar-testi"
                className="lg:w-screen w-auto rounded-lg cursor-pointer "
              />
              <h3 className="text-black font-normal text-[12px]">
                {item.tanggal}
              </h3>
              <h1 className="text-black font-bold lg:text-lg lg:grid-cols grid">
                {item.guru}
              </h1>

              <p className="text-black font-normal lg:font-semibold mt-2 lg:text-1xl text-sm">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Katalog;
