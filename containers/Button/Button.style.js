import styled from "styled-components";

const Button = styled.button`
  background: ${({ type, theme }) =>
    type === "primary" ? theme.primary : "#fff"};
  height:45px;
  width:187px;
  display:flex;
  justify-content:center;
  align-items:center;
  color: #fff;
  border-radius: 4px;
  border: none;
  // padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.4s ease;
  text-transform: uppercase;

  &:hover {
    box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 5px 5px 0 rgb(0 0 0 / 19%);
    transform: scale(1.025);
  }
`;

export { Button };
