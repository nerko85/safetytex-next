import styled from "styled-components";

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  grid-gap: 7rem;
  padding: 5rem 0;

  p {
    line-height: 1.5;
  }

  .staff-card {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-gap: 2rem;
    background-color: #f8f8f8;
    border-left: 8px solid #057e53;
    position: relative;

    .img-wrapp > img {
      position: absolute;
      bottom: 0;
    }

    .member-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem 1rem;

      p {
        font-size: 1rem;
      }

      .position {
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    padding: 2rem 0;

    > div:first-child {
      display: none !important;
      img {
        height: 300px;
        object-fit: cover;
      }
    }

    .img-wrapp img {
      left: -3rem;
    }
  }
`;

export { OfferGrid };
