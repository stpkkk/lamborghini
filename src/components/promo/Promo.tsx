import React from 'react';
import styled from 'styled-components';
import promoImage from '../../assets/images/promo.jpg';
import { Line, Typography } from '../common';
import { theme } from '../../styles';
import { Arrow } from '../../assets/icons';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Container } from '../layout';

const PromoSection = styled.section`
  background: url(${promoImage}) no-repeat center;
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
`;

const { darkGray } = theme.colors.text;

export const Promo: React.FC = () => (
  <PromoSection>
    <Container mw={1220}>
      <Title />
      <Subtitle />
      <Line mw={386} mb={10} />
      <Typography fz={16} color={darkGray}>
        автодром Портимао, Португалия
      </Typography>
    </Container>
    <a href="/">
      <Arrow />
    </a>
  </PromoSection>
);
