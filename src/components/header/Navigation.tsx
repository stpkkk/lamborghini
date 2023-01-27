import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Logo } from '../../assets/icons';
import { theme } from '../../styles';
import { useMobile } from '../hooks';
import { BurgerButton } from './BurgerButton';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;
    padding: 0 10px;
    a li {
      font-size: 16px;
      color: ${theme.colors.text.darkGray};
    }
  }
  ${theme.breakpoints.mobile} {
    ul {
      background: url('https://media0.giphy.com/media/CwM9k8RChLqqQ/giphy.gif?cid=ecf05e47s0uniyf7d35ufnwt4xfxq0oifqsv3bowq8bm8gun&rid=giphy.gif&ct=g')
        75% center;
      background-size: cover;
      height: 100vh;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      background-color: ${theme.colors.background.darkGray};
      padding: 120px 0 0 0;
      z-index: -1;

      a {
        width: 100%;
        li {
          color: #ffffff;
          padding: 10px;
          font-size: 3vh;
          text-transform: uppercase;
          text-align: center;
        }
      }
      a :hover,
      a :active {
        color: ${theme.colors.text.darkGray};
        background-color: #ffffff;
      }
    }
  }
`;

export const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMobile();
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
  const mergedNav = [...leftNav, ...rightNav];

  return (
    <>
      {' '}
      {isMobile ? (
        <StyledNav>
          <Logo width={50} height={53} />
          {isOpen && (
            <ul>
              {mergedNav.map((n) => (
                <a key={uuidv4()} href={n.navLink}>
                  <li> {n.navTitle}</li>
                </a>
              ))}
            </ul>
          )}
          <BurgerButton onClick={() => setOpen((prev) => !prev)} />
        </StyledNav>
      ) : (
        <StyledNav>
          <ul>
            {leftNav.map((n) => (
              <a href={n.navLink} key={uuidv4()}>
                <li>{n.navTitle}</li>
              </a>
            ))}
          </ul>
          <a href="/">
            <Logo width={83} height={105} />
          </a>
          <ul>
            {rightNav.map((n) => (
              <a href={n.navLink} key={uuidv4()}>
                <li>{n.navTitle}</li>
              </a>
            ))}
          </ul>
        </StyledNav>
      )}
    </>
  );
};
