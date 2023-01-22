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
  fs?: string;
  color?: string;
  mw?: number;
  mh?: number;
  fb?: string;
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
  ${({ fs }) =>
    fs &&
    css`
      font-style: ${fs};
    `};
	${({ mw }) =>
    mw &&
    css`
      max-width: ${mw}px;
	  `};
	${({ mh }) =>
    mh &&
    css`
      min-height: ${mh}px;
	  `};
  ${({ fb }) =>
    fb &&
    css`
      flex-basis: ${fb};
    `};
`;

export const Typography = (props: Props) => <StyledComponent {...props} />;
