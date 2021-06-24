import styled from "styled-components";

const ProductsGrid = styled.div`
  margin-left: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill}, minmax(200px, 1fr));
  grid-gap: 5rem;

  @media (max-width: 600px) {
    margin: 2rem 0;
  }
`;

export { ProductsGrid };
