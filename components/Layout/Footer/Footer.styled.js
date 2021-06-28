import styled from "styled-components";

const Footer = styled.footer`
  padding-top: 2rem;
  background: ${({ theme }) => theme.primary};
  .inner {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  h6 {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 1rem;
    color: #fff;
  }

  h5 {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    color: #fff;
  }
`;

const CopyRight = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding: 0.5rem;

  p {
    font-size: 10px;
  }
`;

const InfoCard = styled.div`
  padding-bottom: 1rem;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      p {
        padding: 0;
        margin: 0;
        font-size: 14px;
      }
    }
  }

  .social {
    display: flex;
    gap: 0.6rem;
    a {
      color: white;
      font-size: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 30%;

    h6 {
      font-size: 1.2rem;
    }

    ul p {
      font-size: 1rem;
    }

    .social a {
      font-size: 1.5rem;
    }
  }
`;

const NewsLetter = styled.div`
  p {
    font-size: 10px;
    margin-top: 1rem;
  }

  .input-wrapp {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    input {
      box-sizing: border-box;
      background: transparent;
      border: 1px solid white;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      color: #fff;
      font-size: 1rem;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      background: white;
      outline: none;
      box-shadow: none;
      border: 1px white;
      border-radius: 4px;
      padding: 10px 1rem;
      font-size: 12px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.primary};
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: 1rem;

    h5 {
      font-size: 1.2rem;
    }

    .input-wrapp {
      gap: 1rem;
    }
  }
`;

export { Footer, CopyRight, InfoCard, NewsLetter };
