import styled from "styled-components";

const Sidebar = styled.aside`
  background: whitesmoke;

  h3 {
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .categories {
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 2rem;

    .category-item {
      padding: 1rem 2rem;
      cursor: pointer;

      &.active {
        background: ${({ theme }) => theme.primary};
        color: #fff;
      }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin-bottom: 2rem;
    }
  }
`;

const Filters = styled.div`
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export { Sidebar, FilterGroup, Filters };
