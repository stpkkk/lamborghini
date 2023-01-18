import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode;
  ff?: string;
  m?: string;
  p?: string;
  fz?: number;
  fw?: number;
  lh?: string | number;
  ls?: string;
  color?: string;
  mw?: number;
};

const StyledComponent = styled.div<Props>`
  ${({ ff }) =>
    ff &&
    css`
      font-family: ${ff};
    `};
  ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `};
  ${({ p }) =>
    p &&
    css`
      padding: ${p};
    `};
  ${({ fz }) =>
    fz &&
    css`
      font-size: ${fz}px;
    `};
  ${({ fw }) =>
    fw &&
    css`
      font-weight: ${fw};
    `};
  ${({ lh }) =>
    lh &&
    css`
      line-height: ${() => {
        if (String(lh).includes('%')) return lh;
        return `${lh}px;`;
      }};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
  ${({ ls }) =>
    ls &&
    css`
      letter-spacing: ${ls};
    `};
  ${({ mw }) =>
    mw &&
    css`
      max-width: ${mw}px;
    `};
`;

export const Typography = (props: Props) => <StyledComponent {...props} />;
