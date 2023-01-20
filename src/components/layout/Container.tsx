import styled, { css } from 'styled-components';

type Props = {
  mw?: number;
};

export const Container = styled.div<Props>`
  ${({ mw }) =>
    mw &&
    css`
      max-width: ${mw}px;
    `};
  margin: 0 auto;
  padding: 0 10px;
`;
