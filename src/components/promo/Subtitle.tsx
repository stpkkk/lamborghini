import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles';

const StyledSubtitle = styled.h2`
  font-weight: 400;
  font-family: 'Impact', sans-serif;
  font-size: 48px;
  margin: 0 0 10px 0;
  span {
    display: block;
    font-size: 34px;
    color: ${theme.colors.text.gold};
    padding: 10px 0;
  }
`;

export const Subtitle: React.FC = () => (
  <StyledSubtitle>
    Гранд-финал 2023 <span>3-6 ноября </span>
  </StyledSubtitle>
);
