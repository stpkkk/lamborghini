import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Styled = styled.div<Props>`
  .content {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 10px;
  }
`;

export const PageWrapper = (props: Props) => {
  const { children } = props;
  return (
    <Styled>
      <main className="content">{children}</main>
    </Styled>
  );
};
