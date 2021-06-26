import styled from "styled-components";

const Banner = styled.div`
  position: relative;
  height: ${({ format }) => (format === "landscape" ? "250px" : "550px")};
  width: 100%;
  padding: 2rem;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  border-radius: 20px;
  margin: 5rem 0;
  display: flex;
  flex-direction: ${({ format }) =>
    format === "landscape" ? "row" : "column"};
  justify-content: flex-end;
  align-items: flex-start;

  p {
    max-width: 90%;
    font-size: 1rem;
  }
`;

export { Banner };
