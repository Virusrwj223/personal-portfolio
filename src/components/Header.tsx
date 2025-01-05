import styled from "styled-components";
import { theme } from "../styles/theme";

const HeaderContainer = styled.header`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1100px;
  height: 60px;
  background: ${theme.lightBg};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
  z-index: 1000;
`;

const Logo = styled.div`
  position: absolute;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: ${theme.darkGreen};
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    text-decoration: none;
    color: ${theme.darkGreen};
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${theme.primaryTeal};
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <span style={{ fontSize: "32px", fontWeight: "bold" }}>RAJ</span>
      </Logo>
      <NavLinks>
        <a href="#about">About Me</a>
        <a href="#blog">Blog</a>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
