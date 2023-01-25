import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode;
  fz?: number;
};

const StyledComponent = styled.h1<Props>`
  font-weight: 400;
  font-family: 'Impact', sans-serif;
  list-style: 0.02em;
  margin: 0 0 10px 0px;
  text-transform: uppercase;
  ${({ fz }) =>
    fz &&
    css`
      font-size: ${fz}px;
    `};
`;

export const Title = (props: Props) => <StyledComponent {...props} />;
