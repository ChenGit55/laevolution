"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Image from "next/image";
import Head from "next/head";

function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings} className="carousel-component">
        <Image
          src={"/img/photos/tackle.webp"}
          alt={"slide1"}
          width="900"
          height="900"
        />

        <Image
          src={"/img/photos/kids-playing.webp"}
          alt={"slide2"}
          width="900"
          height="900"
        />

        <Image
          src={"/img/photos/two-boys-playing.webp"}
          alt={"slide3"}
          width="900"
          height="900"
        />
      </Slider>
    </>
  );
}

export default Carousel;
