import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Arrow } from '../../assets/icons/Arrow';
import { theme } from '../../styles';

const StyledBackToTopButton = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  ${theme.breakpoints.mobile} {
    right: 20px;
    bottom: 20px;
  }
`;

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledBackToTopButton onClick={scrollUp}>
      {backToTopButton && <Arrow />}
    </StyledBackToTopButton>
  );
};
