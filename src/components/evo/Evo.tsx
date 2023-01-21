import React from 'react';
import styled from 'styled-components';
import { EvoBlack } from './EvoBlack';
import { EvoWhite } from './EvoWhite';

const EvoSection = styled.section`
margin: 0 0 100px;
`;

export const Evo: React.FC = () => (
  <EvoSection>
    <EvoBlack />
    <EvoWhite />
  </EvoSection>
);
