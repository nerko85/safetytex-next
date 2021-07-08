import styled from "styled-components";

const Grid = styled.div`
  background: whitesmoke;

  .grid-inner {
    display: flex;
    padding: 5rem 2rem;
    max-width:1366px;
    margin:0 auto;
  
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
  }
  
`;

export { Grid };
