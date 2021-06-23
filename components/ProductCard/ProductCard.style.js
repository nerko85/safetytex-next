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
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  position: relative;

  .badge {
    position: absolute;
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
  }

  h3 {
    margin: 1rem;
  }

  h4 {
    margin: 2rem 0 3rem;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.primary};
  }
`;

export { Card };
