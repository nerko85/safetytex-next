import styled from "styled-components";

const StyledSlider = styled.div`
  margin: 2rem auto;

  .navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 9999;
    opacity: 0.8;
    font-size: 1.5rem;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 1;

      &.prev-button {
        color: ${({ theme }) => theme.primary};
      }

      &.next-button {
        color: ${({ theme }) => theme.primary};
      }
    }

    &.prev-button {
      left: 0px;
    }

    &.next-button {
      right: 0px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 2rem !important;
  }
`;

export { StyledSlider };
