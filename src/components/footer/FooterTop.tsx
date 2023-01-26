import React from 'react';
import styled from 'styled-components';
import { Facebook, Insta, Youtube } from '../../assets/icons';
import { theme } from '../../styles';
import { Address } from './Address';

const StyledFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 20px;
  margin: 0 0 80px;
  ${theme.breakpoints.mobile} {
    display: block;
	margin: 0 0 30px;
  }
`;

const ContactsWrapper = styled.li`
  margin: 0 0 30px;
  dt {
    color: #ffffff;
    padding: 0 0 20px;
    text-transform: uppercase;
    font-size: 16px;
  }
  dd {
    padding: 0 0 10px;
    a {
      color: #ffffff;
    }
  }
`;

const SocialMediaWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 20px;
  max-width: 140px;
  margin: 0 0 30px;
`;

export const FooterTop: React.FC = () => (
  <StyledFooterTop>
    <ul>
      <ContactsWrapper>
        <dt>ОБЩИЕ</dt>
        <dd>
          <a href="tel:+79637473732">+7(963) 747-37-32</a>
        </dd>
        <dd>
          <a href="mailto: stipyk1309@gmail.com">stipyk1309@gmail.com</a>
        </dd>
      </ContactsWrapper>
      <ContactsWrapper>
        <dt>Билеты</dt>
        <dd>
          <a href="tel:+79637473732">+7(963) 747-37-32</a>
        </dd>
        <dd>
          <a href="mailto: stipyk1309@gmail.com">stipyk1309@gmail.com</a>
        </dd>
      </ContactsWrapper>
      <SocialMediaWrapper>
        <a href="/">
          <Youtube />
        </a>
        <a href="/">
          <Insta />
        </a>
        <a href="/">
          <Facebook />
        </a>
      </SocialMediaWrapper>
    </ul>
    <Address />
  </StyledFooterTop>
);
