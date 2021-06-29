import styled from "styled-components";

const Brands = styled.div`
  margin-top: 5rem;
  padding: 3.25rem 2rem;
  background: ${({ theme }) => theme.primary};

  .swiper-wrapper {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    cursor: pointer;
    z-index: 9999;
    opacity: 0.8;
    font-size: 1.5rem;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      opacity: 1;

      &.prev-button {
        left: 0px;
      }

      &.next-button {
        right: 0px;
      }
    }

    &.prev-button {
      left: 10px;
    }

    &.next-button {
      right: 10px;
    }
  }
`;

export { Brands };
