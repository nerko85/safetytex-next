import styled from "styled-components";

const InputRoot = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;

  &:first-child {
    padding-top: 0;
  }

  input {
    margin-right: 1rem;
    width: 1rem;
    height: 1rem;
    margin-left: 0;
  }
`;

export { InputRoot };
