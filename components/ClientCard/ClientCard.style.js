import styled from "styled-components";

const ClientCard = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(80, 85, 88);
  color: #fff;
  text-align: center;

  .img-round {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  h3 {
    margin-bottom: 0;
  }

  p,
  span {
    color: ${({ theme }) => theme.lightGray};
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0;
  }

  span {
    line-height: 2;
    opacity: 0.5;
    margin-bottom: 1.5rem;
  }
`;

export { ClientCard };
