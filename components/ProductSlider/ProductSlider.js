import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { StyledSlider } from "./ProductSlider.style";
import ProductCard from "../ProductCard";

import SwiperCore, { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

export default function ProductSlider({ products, children, aplay, nav }) {
  return (
    <div className="container">
      <StyledSlider>
        {children}
        <Swiper
          slidesPerView={3}
          loop={true}
          autoplay={
            aplay && {
              delay: 2500,
              disableOnInteraction: false,
            }
          }
          navigation={
            nav && {
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }
          }
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
        >
          {products &&
            products.map((product, index) => {
              const { images, name, status, price } = product;
              return (
                <SwiperSlide key={index}>
                  <ProductCard
                    image={images[0]}
                    name={name}
                    status={status}
                    price={price}
                  />
                </SwiperSlide>
              );
            })}
          {nav && (
            <>
              <div className="navigation next-button">
                <FaAngleRight />
              </div>
              <div className="navigation prev-button">
                <FaAngleLeft />
              </div>
            </>
          )}
        </Swiper>
      </StyledSlider>
    </div>
  );
}

ProductSlider.defaultProps = {
  aplay: false,
};
