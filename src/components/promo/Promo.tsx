import React from 'react';
import styled from 'styled-components';
import promoImage from '../../assets/images/promo.jpg';
import { Line, Typography } from '../common';
import { theme } from '../../styles';
import { Arrow } from '../../assets/icons';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Container } from '../layout';
import { useMobile } from '../hooks';

const PromoSection = styled.section`
  background: url(${promoImage}) no-repeat left center;
  background-size: cover;
  min-height: 100vh;
  text-align: center;
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  a {
    margin-top: auto;
    margin-bottom: 30px;
    align-self: center;
  }
  ${theme.breakpoints.mobile} {
    background-position: 8% center;
  }
`;

const { darkGray } = theme.colors.text;

export const Promo: React.FC = () => {
  const isMobile = useMobile();

  return (
    <PromoSection>
      {isMobile ? (
        <>
          <Container mw={1220}>
            <Title fz={40}>LAMBORGHINI SUPER TROFEO</Title>
            <Subtitle fz={25} m="0 0 0">
              Гранд-финал 2023 <span>3-6 ноября </span>
            </Subtitle>
            <Line mw={200} mb={10} />
            <Typography fz={14} color="#000000">
              автодром Портимао, Португалия
            </Typography>
          </Container>
          <a href="/">
            <Arrow />
          </a>
        </>
      ) : (
        <>
          <Container mw={1220}>
            <Title fz={76}>LAMBORGHINI SUPER TROFEO</Title>
            <Subtitle fz={48}>
              Гранд-финал 2023 <span>3-6 ноября </span>
            </Subtitle>
            <Line mw={386} mb={10} />
            <Typography fz={16} color={darkGray}>
              автодром Портимао, Португалия
            </Typography>
          </Container>
          <a href="/">
            <Arrow />
          </a>
        </>
      )}
    </PromoSection>
  );
};
