import React from "react";
import styled from "styled-components";

export default function Spacer({ size }) {
  return <Space size={size} />;
}

const Space = styled.div`
  width: 100%;
  padding: ${({ size }) => (size == "small" ? "1rem" : "2rem")} 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: ${({ size }) => (size == "small" ? ".5rem" : "1rem")} 0;
  }
`;

Spacer.defaultProps = {
  size: "small",
};
