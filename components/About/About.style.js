import styled from "styled-components";

const About = styled.div`
  .content {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns:${({type})=>type==="about"?"1fr 1.5fr":"1.5fr 1fr"};

    .media {
      ${({ type }) =>
        type == "about" ? "margin-bottom" : "margin-top"}:-10rem;
      order: ${({ type }) => (type == "about" ? "unset" : "2")};
      // justify-self: end;
    }

    .text-content {
      ${({ type }) =>
        type == "about" ? "padding-bottom" : "padding-top"}:4rem;
      ${"" /* padding-bottom:4rem; */}
      max-width:530px;
     
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      grid-gap: 1rem;
      grid-template-columns: 1fr;

      .media {
        margin-bottom: 1rem;
        justify-self: center;
      }
      
      .text-content {
        max-width:100%;
      }
    }
  }
`;

export { About };
