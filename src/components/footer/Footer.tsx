import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles';
import { Container } from '../layout';
import { FooterTop } from './FooterTop';
import { FooterBottom } from './FooterBottom';
import { StyledH3 } from '../common';

const StyledFooter = styled.footer`
  background: ${theme.colors.background.darkGray};
  padding: 100px 0 80px;
`;

export const Footer: React.FC = () => (
  <StyledFooter>
    <Container mw={1220}>
      <Container mw={920}>
        <StyledH3 m="0 0 50px" color="#FFFFFF">
          Контакты
        </StyledH3>
        <FooterTop />
        <FooterBottom />
      </Container>
    </Container>
  </StyledFooter>
);
