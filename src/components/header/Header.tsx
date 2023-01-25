import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles';
import { Container } from '../layout';
import { Navigation } from './Navigation';

const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  padding: 25px 42px 0 0;
  background: ${theme.colors.gradient.promo};
  filter: ${theme.colors.filter.promoFilter};
  ${theme.breakpoints.mobile} {
    padding: 25px 10px;
  }
`;

export const Header: React.FC = () => (
  <StyledHeader>
    <Container mw={1220}>
      <Navigation />
    </Container>
  </StyledHeader>
);
