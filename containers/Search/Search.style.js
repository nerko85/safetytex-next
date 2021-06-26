import styled from "styled-components";

const Search = styled.div`
  display: flex;
  padding: 0.6rem 1rem;
  background: #fff;

  .icon {
    margin-right: 1rem;
  }

  input {
    border: none;
    outline: none;
    font-size: 1rem;
    width: 100%;
    line-height: 1.3;
    color: gray;

    &::placeholder {
      color: lightgray;
    }
  }
`;

export { Search };
