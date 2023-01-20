import styled, { css } from 'styled-components';

type Props = {
  mw?: number;
  mb?: number;
};

const StyledComponent = styled.div<Props>`
  border-bottom: solid 1px ${({ theme: t }) => t.colors.line.black};
  padding: 0 10px;
  margin: 0 auto;
  ${({ mw }) =>
    mw &&
    css`
      max-width: ${mw}px;
    `};
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `};
`;

export const Line = (props: Props) => <StyledComponent {...props} />;
