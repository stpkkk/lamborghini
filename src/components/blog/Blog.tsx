import React from 'react';
import { StyledH3 } from '../common';
import { Container } from '../layout';
import { BlogQuote } from './BlogQuote';
import { BlogSlider } from './BlogSlider';

export const Blog: React.FC = () => (
    <Container mw={920}>
      <StyledH3 m="0 0 30px">Блог</StyledH3>
      <BlogSlider />
      <BlogQuote />
    </Container>
);
