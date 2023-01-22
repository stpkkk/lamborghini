import React from 'react';
import styled from 'styled-components';
import { Container } from './layout';
import { StyledH3, Typography } from './common';
import trackImage from '../assets/images/track-img.png';
import trackBgImage from '../assets/images/track-bg.jpg';

const TrackSection = styled.section`
  background: url(${trackBgImage}) no-repeat center;
  background-size: cover;
  img {
    display: block;
    margin: auto auto 90px auto;
  }
`;
const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Track: React.FC = () => (
  <TrackSection>
    <Container mw={920}>
      <TrackWrapper>
        <StyledH3 p="50px 0 30px 0">ТРЕК ПОРТИМАО</StyledH3>
        <Typography mw={435} fw={400}>
          Autodromo Internacional do Algarve находится в одноименном регионе на
          юге Португалии, недалеко от города Портиман. Открытый в октябре 2008
          года автогоночный комплекс является одним из самых современных в
          Европе, раскинувшись на площади около 300 гектаров среди холмов,
          окружающих португальский город, а длина самой трассы составляет 4684
          метра.
        </Typography>
        <img src={trackImage} alt="track" />
      </TrackWrapper>
    </Container>
  </TrackSection>
);
