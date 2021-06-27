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
  flex-direction: column;
  justify-content: flex-end;
  align-items: ${({ format }) =>
    format === "landscape" ? "flex-end" : "flex-start"};

  p {
    max-width: ${({ format }) => (format === "landscape" ? "200px" : "90%")};
    font-size: 1rem;
    text-align: ${({ format }) => (format === "landscape" ? "right" : "left")};
  }
`;

export { Banner };
