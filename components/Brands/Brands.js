import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Brands as StyledBrands } from "./Brands.style";

import SwiperCore, { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

export default function Brands({ brands }) {
  return (
    <StyledBrands>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {brands &&
          brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={brand.image} alt={brand.name} />
              </div>
            </SwiperSlide>
          ))}
        <div className="navigation next-button">
          <FaAngleRight />
        </div>
        <div className="navigation prev-button">
          <FaAngleLeft />
        </div>
      </Swiper>
    </StyledBrands>
  );
}
