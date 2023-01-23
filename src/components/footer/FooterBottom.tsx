import React from 'react';
import styled from 'styled-components';
import { FooterLogo } from '../../assets/icons';

const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #ffffff;
  }
`;

export const FooterBottom: React.FC = () => (
  <StyledFooterBottom>
    <a href="https://github.com/stpkkk">Developed by Igor Stepanov</a>
    <FooterLogo />
    <a href="/">Политика конфиденциальности </a>
  </StyledFooterBottom>
);
