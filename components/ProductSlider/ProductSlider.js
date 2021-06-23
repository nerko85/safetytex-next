import React from "react";
import ProductCard from "../ProductCard";

import SwiperCore, { Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

export default function ProductSlider({ products, children, aplay }) {
  return (
    <div className="container">
      <StyledSlider>
        {children}
        <SliderContainer>
          <Swiper
            slidesPerView={3}
            loop={true}
            autoplay={
              aplay && {
                delay: 2500,
                disableOnInteraction: false,
              }
            }
            breakpoints={{
              400: {
                slidesPerView: 1,
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
                const { images, name, status, price } = product.fields;
                return (
                  <SwiperSlide key={index}>
                    <ProductCard
                      image={images[0].fields.file.url}
                      name={name}
                      status={status}
                      price={price}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </SliderContainer>
      </StyledSlider>
    </div>
  );
}

ProductSlider.defaultProps = {
  aplay: false,
};

const StyledSlider = styled.div`
  margin: 2rem 0;
`;

const SliderContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 2rem !important;
  }
`;
