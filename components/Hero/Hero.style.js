import styled from "styled-components";

const Hero = styled.div`
  min-height: ${({ small }) => (small ? "400px" : "100vh")};
  display: flex;
  background: url(${({ hero }) => hero}) no-repeat center;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    background-position-x: left;
  }

  .content {
    width: 100%;
    align-self: center;

    .text {
      max-width: 40vw;

      @media (max-width: ${({ theme }) => theme.tablet}) {
        max-width: 90%;
      }

      h1 {
        color: ${({ small, theme }) => (small ? theme.primary : "#fff")};
        margin-bottom: ${({ small }) => (small ? "0px" : "0.67em")};
        line-height: 1.2;
      }
      p {
        color: ${({ small, theme }) => (small ? theme.text : "#fff")};
        margin-bottom: 3rem;
      }
    }
  }
`;

export { Hero };
