import styled from "styled-components";

const Facts = styled.div`
  padding-top: 4rem;
  .content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    h1 {
      margin: 0;
      font-weight: bold;
    }

    & > * {
      flex: 1 1 50%;

      @media (max-width: ${({ theme }) => theme.tablet}) {
        flex: 0 1 100%;
      }
    }
  }
`;

export { Facts };
