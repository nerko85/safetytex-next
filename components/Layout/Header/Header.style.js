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
    overflow-y: hidden;

    .hambMenu {
      display: none;
      background: none;
      border: none;
      font-size: 2rem;
      position: absolute;
      top: 74px;
      right: 40px;
      color: ${({ theme, active }) =>
        active ? theme.darkGray : theme.navLinks};
      z-index: 99999999;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      .hambMenu {
        display: block;
      }
    }
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    a img.typography {
      display: none !important;
    }
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    align-items: center;

    .contact-btn {
      margin-left:1rem;
      padding-right:1rem;
    }

    li > a {
      color: ${({ theme }) => theme.navLinks};
      transition: all 0.4s ease;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: ${({ active }) => (active ? "flex" : "none")};
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;

    ul {
      flex-direction: column;
      padding: 0;
      gap: 2rem;

      li a {
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 1.2rem;
        color: #212529;
      }

      & li:last-child a {
        color: #fff;
      }
    }
  }
`;

export { Header, HeaderTop, Logo, Navigation };
