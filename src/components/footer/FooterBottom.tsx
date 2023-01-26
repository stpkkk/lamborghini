import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../assets/icons';
import { theme } from '../../styles';

const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #ffffff;
    span {
      text-decoration: underline;
    }
  }
  ${theme.breakpoints.mobile} {
    display: block;
    text-align: center;
    a {
      display: block;
      padding: 20px 0;
    }
  }
`;

export const FooterBottom: React.FC = () => (
  <StyledFooterBottom>
    <a href="https://github.com/stpkkk">
      Developed by <span>Igor Stepanov</span>
    </a>
    <Logo width={50} height={58} />
    <a href="/">Политика конфиденциальности </a>
  </StyledFooterBottom>
);
