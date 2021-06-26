import styled from "styled-components";

const Contact = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  grid-gap: 3rem;
  .our-details {
    h1 {
      margin-bottom: 4rem;
    }

    p {
      font-size: 1rem;
    }
  }

  .contact-form {
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export { Contact };
