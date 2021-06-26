import styled from "styled-components";

const ClientsSlider = styled.div`
  padding: 4rem 0;
  background: ${({ theme }) => theme.darkGray};

  .slider-header {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 5rem;

    h1 {
      color: #fff;
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.lightGray};
    }
  }

  .navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 9999;
    opacity: 0.8;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.lightGray};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 1;

      &.prev-button {
        color: ${({ theme }) => theme.white};
      }

      &.next-button {
        color: ${({ theme }) => theme.white};
      }
    }

    &.prev-button {
      left: 0px;
    }

    &.next-button {
      right: 0px;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    .slider-header {
      width: 100%;
    }
  }
`;

export { ClientsSlider };
