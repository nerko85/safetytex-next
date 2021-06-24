import styled from "styled-components";

const CategoryCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
    transform: scale(1.025);
  }
`;

export { CategoryCard };
