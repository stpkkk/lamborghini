import React from 'react';
import styled from 'styled-components';
import { EvoVideoIcon } from '../../assets/icons';
import { Typography } from '../common';
import { Container } from '../layout';
import videoCover from '../../assets/images/evo-video-cover.png';
import ThirdDecImage from '../../assets/images/evo-dec-3.png';
import FourthDecImage from '../../assets/images/evo-dec-4.png';
import { theme } from '../../styles';

const EvoWhiteWrapper = styled.div`
  margin: 100px 0 0;
  overflow-x: hidden;
  ::before {
    content: '';
    position: absolute;
    background: url(${ThirdDecImage});
    width: 274px;
    height: 250px;
    top: 855px;
    left: 850px;
    @media (max-width: 1130px) {
      display: none;
    }
  }
  ::after {
    content: '';
    position: absolute;
    background: url(${FourthDecImage});
    width: 310px;
    height: 300px;
    top: 1000px;
    left: 1095px;
    @media (max-width: 1415px) {
      display: none;
    }
  }
  ${theme.breakpoints.mobile} {
    margin: 50px 0 0;
  }
`;

const EvoBlackTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${theme.breakpoints.mobile} {
    margin: 0 0 50px;
  }
`;

const EvoWhiteVideo = styled.div`
  background: url(${videoCover}) no-repeat center;
  background-size: cover;
  height: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 100px 0 0 0;
  a span {
    display: block;
    color: #fff;
  }
`;

export const EvoWhite: React.FC = () => (
  <EvoWhiteWrapper>
    <Container mw={920}>
      <EvoBlackTextBox>
        <Typography mw={285}>
          Его неповторимый дизайн — это естественная эволюция культовых линий
          Huracán, включающая новые сложные решения, поднимающие
          производительность и вызывающие эмоции на невиданный ранее уровень.
        </Typography>
        <Typography mw={437}>
          Беспрецедентный обвес был разработан инженерами отдела автоспорта
          Automobili Lamborghini в сотрудничестве с Dallara Engineering и
          Lamborghini Centro Stile. Последний также разработал стартовую ливрею
          для автомобиля в честь партнерства между Lamborghini Squadra Corse и
          Roger Dubuis, которое началось в 2018 году.
        </Typography>
        <Typography mw={590}>
          Среди наиболее очевидных изменений в обвесе Lamborghini Huracan Super
          Trofeo EVO — задний спойлер на заднем капоте и верхний
          воздухозаборник, которые делают его мгновенно узнаваемым для зрителей.
        </Typography>
      </EvoBlackTextBox>
      <EvoWhiteVideo id="watch-online">
        <a href="https://www.youtube.com/watch?v=wm3CMcFDodA">
          <EvoVideoIcon />
          <span>смотреть онлайн</span>
        </a>
      </EvoWhiteVideo>
    </Container>
  </EvoWhiteWrapper>
);
