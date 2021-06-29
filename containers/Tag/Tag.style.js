import styled from "styled-components";

const Tag = styled.h5`
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.1rem;
  margin: 0;
  color: ${({ type, theme }) => (type == "primary" ? theme.primary : "#fff")};
  font-weight: 600;
`;

export { Tag };
