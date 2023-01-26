import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles';
import { EvoBlack } from './EvoBlack';
import { EvoWhite } from './EvoWhite';

const EvoSection = styled.section`
  margin: 0 auto 100px;
  position: relative;
  overflow-x: hidden;
  ${theme.breakpoints.mobile} {
	margin: 0 auto 50px;
  }
`;

export const Evo: React.FC = () => (
  <EvoSection>
    <EvoBlack />
    <EvoWhite />
  </EvoSection>
);
