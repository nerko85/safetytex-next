import styled from "styled-components";

const FilterTop = styled.div`
  margin-left: 4rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  span {
    display: inline-block;
    font-size: 1rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.primary};
  }

  h3 {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: 0;
    flex-direction: column;
    align-items: stretch;

    h3 {
      margin: 0 0 1rem;
    }

    select {
      width: 100%;
    }
  }
`;

const ProductsGrid = styled.div`
  margin-left: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill}, minmax(200px, 1fr));
  grid-gap: 5rem;
  justify-items: center;

  @media (max-width: 600px) {
    margin: 2rem 0;
    grid-gap: 2rem;
  }
`;

export { ProductsGrid, FilterTop };
