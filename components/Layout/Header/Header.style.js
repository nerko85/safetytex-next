import styled from "styled-components";

const Header = styled.header`
  position: ${({ theme }) => theme.position};
  top: 0;
  left: 0;
  right: 0;

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
    align-items: center;

    li > a {
      color: ${({ theme }) => theme.navLinks};
      transition: all 0.4s ease;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;

export { Header, HeaderTop, Logo, Navigation };
