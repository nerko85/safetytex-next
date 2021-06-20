import styled from "styled-components";

const Header = styled.header`
  position: relative;

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
  margin: 1.5rem 0;
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
