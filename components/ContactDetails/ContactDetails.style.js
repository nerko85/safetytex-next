import styled from "styled-components";

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .card {
    padding: 0.6rem 2.5rem;
    margin: 2rem 0;
    display: flex;
    align-items: center;

    svg {
      font-size: 3rem;
      color: ${({ color }) => color};
    }

    .info {
      margin-left: 1rem;

      h4 {
        margin: 0;
        font-weight:400;
      }

      p{
        font-weight:600;
      }
    }

    &.address {
      padding:2rem;
      border-left: 5px solid ${({ theme }) => theme.primary};
      box-shadow: 0 6px 8px rgb(0 0 0 / 19%);

      .info {
        margin-left: 0;

        p {
          font-weight:bold;
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin: 1rem 0 0 0;
    }
  }
`;

export { Details };
