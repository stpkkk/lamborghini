import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../assets/icons';
import { theme } from '../../styles';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0 40px;
    padding: 0 20px;
    li a {
      font-size: 16px;
      color: ${theme.colors.text.darkGray};
    }
  }
`;

export const Navigation: React.FC = () => {
  const leftNav = [
    { navLink: '/', navTitle: 'О гонке' },
    { navLink: '/', navTitle: 'Трек' },
    { navLink: '/', navTitle: 'Lamborghini Super trofeo' },
    { navLink: '/', navTitle: 'Новости' },
  ];
  const rightNav = [
    { navLink: '/', navTitle: 'Купить билеты' },
    { navLink: '/', navTitle: 'Смотреть онлайн' },
    { navLink: '/', navTitle: 'Контакты' },
  ];
  return (
    <StyledNav>
      <ul>
        {leftNav.map((n) => (
          <li key={crypto.randomUUID()}>
            <a href={n.navLink}>{n.navTitle}</a>
          </li>
        ))}
      </ul>
      <a href="/">
        <Logo />
      </a>
      <ul>
        {rightNav.map((n) => (
          <li key={crypto.randomUUID()}>
            <a href={n.navLink}>{n.navTitle}</a>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};
