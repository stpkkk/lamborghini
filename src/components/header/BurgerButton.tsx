import styled from 'styled-components';

type Props = {
  onClick?: () => void;
};

const StyledComponent = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
  z-index: 5;
  cursor: pointer;
  span {
    height: 3px;
    width: 100%;
    background-color: #ffffff;
  }
`;

export const BurgerButton = (props: Props) => (
  <StyledComponent {...props}>
    <span />
    <span />
    <span />
  </StyledComponent>
);
