import React, { useRef } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper.min.css';
import { theme } from '../../styles/theme';
import { Typography } from '../common';
import { LeftArrow, RightArrow } from '../../assets/icons';
import { getSliderData } from '../../services';

const BlogSliderWrapper = styled.div`
  margin: 0 10px 100px 10px;
  ${theme.breakpoints.mobile} {
    margin: 0;
    img {
      width: 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0 0 20px;
  button {
    background: ${theme.colors.background.page};
    border: none;
    cursor: pointer;
  }
`;

const { darkGray } = theme.colors.text;

export const BlogSlider: React.FC = () => {
  const swiperRef = useRef<SwiperCore>();
  const sliderSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1920: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };
  return (
    <BlogSliderWrapper>
      <ButtonWrapper>
        <button type="button" onClick={() => swiperRef.current?.slidePrev()}>
          <LeftArrow />
        </button>
        <button type="button" onClick={() => swiperRef.current?.slideNext()}>
          <RightArrow />
        </button>
      </ButtonWrapper>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={sliderSettings}
        loop
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {getSliderData.map((s) => (
          <SwiperSlide key={uuidv4()}>
            <img src={s.image} alt="slide" />
            <Typography mh={46} fw={400} fz={20} m="10px 0">
              {s.title}
            </Typography>
            <Typography>{s.description}</Typography>
            <a href="/">
              <Typography fz={12} m="10px 0" color={darkGray}>
                читать подробнее...
              </Typography>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </BlogSliderWrapper>
  );
};
