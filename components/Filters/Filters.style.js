import styled from "styled-components";

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

export { Filters, FilterGroup };
