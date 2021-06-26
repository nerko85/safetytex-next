import styled from "styled-components";

const Select = styled.select`
  display: inline-block;
  min-width: 218px;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid transparent;
  border-right: 10px solid white;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export { Select };
