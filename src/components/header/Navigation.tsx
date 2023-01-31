import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-scroll';
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
    gap: 0 50px;
    padding: 0 10px;
    li {
      font-size: 16px;
      cursor: pointer;
      color: ${theme.colors.text.darkGray};
	  :hover {
		text-decoration: underline;
	  }
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

      li {
        color: #ffffff;
        padding: 10px;
        font-size: 3vh;
        text-transform: uppercase;
        text-align: center;
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
    { navLink: 'info', navTitle: 'О гонке' },
    { navLink: 'track', navTitle: 'Трек' },
    { navLink: 'evo', navTitle: 'Lamborghini Super trofeo' },
  ];
  const rightNav = [
    { navLink: 'blog', navTitle: 'Новости' },
    { navLink: 'watch-online', navTitle: 'Смотреть онлайн' },
    { navLink: 'contacts', navTitle: 'Контакты' },
  ];
  const mergedNav = [...leftNav, ...rightNav];

  return (
    <>
      {' '}
      {isMobile ? (
        <StyledNav>
          <Link key={uuidv4()} to="/" spy smooth offset={50} duration={500}>
            <Logo width={50} height={53} />
          </Link>
          {isOpen && (
            <ul>
              {mergedNav.map((n) => (
                <Link
                  key={uuidv4()}
                  to={n.navLink}
                  spy
                  smooth
                  offset={50}
                  duration={500}
                >
                  <li> {n.navTitle}</li>
                </Link>
              ))}
            </ul>
          )}
          <BurgerButton onClick={() => setOpen((prev) => !prev)} />
        </StyledNav>
      ) : (
        <StyledNav>
          <ul>
            {leftNav.map((n) => (
              <Link
                key={uuidv4()}
                to={n.navLink}
                spy
                smooth
                offset={0}
                duration={500}
              >
                <li>{n.navTitle}</li>
              </Link>
            ))}
          </ul>
          <Link key={uuidv4()} to="/" spy smooth offset={50} duration={500}>
            <Logo width={83} height={105} />
          </Link>
          <ul>
            {rightNav.map((n) => (
              <Link
                key={uuidv4()}
                to={n.navLink}
                spy
                smooth
                offset={0}
                duration={500}
              >
                <li>{n.navTitle}</li>
              </Link>
            ))}
          </ul>
        </StyledNav>
      )}
    </>
  );
};
