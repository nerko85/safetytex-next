import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const HeaderTop = styled.div`
  background: ${({ theme }) => theme.primary};
  padding: 8px 0;
  margin-left: auto;
  .icons > * {
    margin-right: 0.5rem;
    color: #fff;
    font-size: 1.2rem;
  }
`;

const Logo = styled.h1`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
`;

export { Header, HeaderTop, Logo, Navigation };
