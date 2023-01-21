import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode;
  p?: string;
  m?: string;
  color?: string;
};

const StyledComponent = styled.h3<Props>`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  ${({ p }) =>
    p &&
    css`
      padding: ${p};
    `};
  ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
`;

export const StyledH3 = (props: Props) => <StyledComponent {...props} />;
