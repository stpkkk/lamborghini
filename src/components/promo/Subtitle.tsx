import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles';

type Props = {
  children: ReactNode;
  fz: number;
};

const StyledComponent = styled.h2<Props>`
  font-weight: 400;
  font-family: 'Impact', sans-serif;
  margin: 0 0 10px 0;
  span {
    display: block;
    font-size: 34px;
    color: ${theme.colors.text.gold};
    padding: 10px 0;
  }
  ${({ fz }) =>
    fz &&
    css`
      font-size: ${fz}px;
    `};
`;

export const Subtitle = (props: Props) => <StyledComponent {...props} />;
