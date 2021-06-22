import styled from "styled-components";

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .card {
    padding: 0.6rem 2.5rem;
    margin: 2rem 0;
    display: flex;

    .info {
      margin-left: 1rem;
    }

    &:first-child {
      border-left: 5px solid ${({ theme }) => theme.primary};

      .info {
        margin-left: 0;
      }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin: 1rem 0 0 0;
    }
  }
`;

export { Details };
