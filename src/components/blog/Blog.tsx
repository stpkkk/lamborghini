import React from 'react';
import { StyledH3 } from '../common';
import { useMobile } from '../hooks';
import { Container } from '../layout';
import { BlogQuote } from './BlogQuote';
import { BlogSlider } from './BlogSlider';

export const Blog: React.FC = () => {
  const isMobile = useMobile();

  return (
    <Container mw={920} id="blog">
      <StyledH3 m="0 0 30px" p={isMobile ? '50px 0 0' : '100px 0 0'}>
        Блог
      </StyledH3>
      <BlogSlider />
      <BlogQuote />
    </Container>
  );
};
