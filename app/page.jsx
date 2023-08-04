"use client";

import Image from "next/image";
import Link from "next/link";
import DeliveryGif from "../public/gifs/delivery.gif";
import { BsLaptopFill, BsSmartwatch } from "react-icons/bs";
import { GiSofa, GiWrappedSweet } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import {
  FaTshirt,
  FaBicycle,
  FaHeadphonesAlt,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { v4 } from "uuid";
//import "~slick-carousel/slick/slick.css";
//import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function Page() {
  let componets = [
    {
      icon: <BsLaptopFill key={v4()} />,
      category: "laptop",
    },
    {
      icon: <GiSofa key={v4()} />,
      category: "sofa",
    },
    {
      icon: <AiOutlineMobile key={v4()} />,
      category: "phone",
    },
    {
      icon: <FaTshirt key={v4()} />,
      category: "tshirt",
    },
    {
      icon: <FaBicycle key={v4()} />,
      category: "cycle",
    },
    {
      icon: <FaHeadphonesAlt key={v4()} />,
      category: "",
    },
    {
      icon: <BsSmartwatch key={v4()} />,
      category: "watch",
    },
    {
      icon: <GiWrappedSweet key={v4()} />,
      category: "sweet",
    },
    {
      icon: <IoGameController key={v4()} />,
      category: "game",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 3500,
    CssEase: "linear",
    slidesToShow: 5,
    slidesTpScroll: 5,
    initialSlide: 0,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,

    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="w-full  items-center rounded-xl flex p-10 justify-between  shadow-md h-[40vh] magic-gradient overflow-hidden">
        <div className="justify-center w-full p-5 text-center text-white lg:text-left lg:pl-20">
          <h1 className="text-4xl font-bold uppercase lg:text-6xl">
            free delivery
          </h1>
          <p className="py-3 lg:text-xl">
            Don&#39;t miss it out! Only today, get free Next day Delivery on all
            your orders.
          </p>
          <div>
            <button className="px-4 py-2 text-lg text-black capitalize bg-white rounded-md">
              browse products
            </button>
          </div>
        </div>
        <div className="items-center justify-center hidden w-full lg:flex">
          <Image
            src={"/gifs/delivery.gif"}
            alt="gif1"
            width={700}
            height={500}
          />
        </div>
      </div>
      <div>
        <h1 className="py-3 pt-3 pb-5 text-3xl font-bold text-center">
          Popular Categories ✨{" "}
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full">
          {componets.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/category/${item.category}`}>
                <button className="p-5 m-5 text-6xl transition-transform border shadow-md rounded-xl hover:scale-90">
                  {item.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h1>Hot Deals 🔥</h1>
        <div className="w-full">
          <Slider {...settings}>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
          </Slider>
        </div>
      </div>
    </div>
  );
}
