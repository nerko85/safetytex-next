import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  background: whitesmoke;
  padding: 5rem;

  & > * {
    flex: 1 1 100%;
  }

  aside {
    flex: 1 0 25%;
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
    padding: 2rem;
  }
`;

export { Grid };
