import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 6rem;
  margin-bottom: 5rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    grid-gap: 2rem;
  }
`;

export { Grid };
