import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ClientsSlider as StyledSlider } from "./ClientsSlider.style";
import ClientCard from "../ClientCard";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function ClientsSlider({ clients, children, aplay, nav }) {
  return (
    <StyledSlider>
      <div className="container">
        <div className="slider-header">{children}</div>
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
          pagination={true}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {clients &&
            clients.map((client) => {
              const { images, person, position, impression } = client.fields;
              return (
                <SwiperSlide key={client.sys.id}>
                  <ClientCard
                    image={images[0].fields.file.url}
                    person={`${person} 00${client.sys.id}`}
                    position={position}
                    impression={impression}
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
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </StyledSlider>
  );
}

ClientsSlider.defaultProps = {
  aplay: false,
  nav: false,
};
