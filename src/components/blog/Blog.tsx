import React from 'react';
import styled from 'styled-components';
import { StyledH3 } from '../common';
import { Container } from '../layout';
import { BlogQuote } from './BlogQuote';
import { BlogSlider } from './BlogSlider';

const BlogSection = styled.section`
  margin: 0 0 100px;
`;

export const Blog: React.FC = () => (
  <BlogSection>
    <Container mw={920}>
      <StyledH3 m="0 0 30px">Блог</StyledH3>
      <BlogSlider />
      <BlogQuote />
    </Container>
  </BlogSection>
);
