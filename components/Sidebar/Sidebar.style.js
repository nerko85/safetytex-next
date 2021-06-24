import styled from "styled-components";

const Sidebar = styled.aside`
  background: whitesmoke;

  .categories {
    display: flex;
    flex-direction: column;
    background: #fff;

    .category-item {
      padding: 1rem 2rem;
      cursor: pointer;

      &.active {
        background: ${({ theme }) => theme.primary};
        color: #fff;
      }
    }
  }
`;

export { Sidebar };
