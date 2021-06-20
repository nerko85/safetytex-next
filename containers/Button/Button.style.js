import styled from "styled-components";

const Button = styled.button`
  background: ${({ type, theme }) =>
    type === "primary" ? theme.primary : "#fff"};
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.4s ease;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
    transform: scale(1.025);
  }
`;

export { Button };
