import styled from "styled-components";

const Counter = styled.div`
  padding: 3.5rem 0;
  .statistics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Stat = styled.div`
  text-align: center;

  &:nth-child(odd) {
    color: ${({ theme }) => theme.primary};
  }

  span {
    font-size: 3.5rem;
    font-weight: bold;
  }
  p {
    font-size: 0.8rem;
    letter-spacing: 2px;
    margin-top: 0;
  }
`;

export { Counter, Stat };
