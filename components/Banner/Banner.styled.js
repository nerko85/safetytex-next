import styled from "styled-components";

const Banner = styled.div`
  height: 250px;
  width: 100%;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  border-radius: 20px;
  margin: 5rem 0;
`;

export { Banner };
