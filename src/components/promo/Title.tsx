import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-weight: 400;
  font-family: 'Impact', sans-serif;
  font-size: 76px;
  list-style: 0.02em;
  margin: 0 0 10px 0px;
  text-transform: uppercase;
`;

export const Title: React.FC = () => (
  <StyledTitle>LAMBORGHINI SUPER TROFEO</StyledTitle>
);
