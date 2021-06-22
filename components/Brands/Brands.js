import React from 'react'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import {Brands as StyledBrands} from './Brands.style'

import SwiperCore, { Autoplay, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// install Swiper modules
SwiperCore.use([Autoplay,Navigation]);


export default function Brands({brands}) {
    return (
        <StyledBrands>
            <div className="container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.next-button',
                        prevEl: '.prev-button',
                    }}
                    loop={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                      }}
                    >
                    { 
                        brands && brands.map((brand,index)=>(
                            <SwiperSlide key={index}>
                                <div><img src={brand.image} alt={brand.name}/></div>
                            </SwiperSlide>
                        ))
                    }
                    <div className="navigation next-button"><FaArrowAltCircleRight/></div>
                    <div className="navigation prev-button"><FaArrowAltCircleLeft/></div>
                </Swiper>
            </div>
        </StyledBrands>
    )
}
