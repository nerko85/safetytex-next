import styled from "styled-components";

const Contact = styled.div`
  padding: 6rem 0;
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

  @media (max-width: ${({ theme }) => theme.laptop}) {
    padding: 3rem 0;
    grid-template-columns: 1fr;

    .our-details h1 {
      margin-bottom: 2rem;
    }
  }
`;

export { Contact };
