import styled from "styled-components";

const Card = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  background: #fff;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 10px;
  padding: 4rem 1rem;
  position: relative;

  .badge {
    position: absolute;
    top: 20px;
    left: 15px;
    display: inline-block;
    padding: 3px 10px;
    background: ${({ theme }) => theme.primary};
    font-size: 8px;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
  }

  .status {
    color: gray;
    text-transform: capitalize;
    margin-bottom: 0;
    font-size: 14px;
  }

  h3 {
    margin: 0.6rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  h4 {
    margin: 1rem 0 0 0;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 2rem 1rem;

    img {
      object-fit: contain;
    }
  }
`;

export { Card };
