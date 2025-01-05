import styled from "styled-components";
import { theme } from "../styles/theme";
import personalLogo from "../assets/personalLogo.png";


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
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  z-index: 1000;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between image and text */
`;

const LogoImage = styled.img`
  width: 40px; /* Adjust image size */
  height: 40px;
  border-radius: 50%; /* Optional: Makes it circular */
  object-fit: cover;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-grow: 1;
  justify-content: center;

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

const Button = styled.a`
  background-color: ${theme.primaryTeal};
  color: #ffffff;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.darkGreen};
    color: #ffffff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer href="/">
        <LogoImage src={personalLogo} alt="Logo"/>
      </LogoContainer>
      <NavLinks>
        <a href="/aboutMe">About Me</a>
        <a href="https://medium.com/@mhrishiraj">Blog</a>
      </NavLinks>
      <Button href="/contactMe">Connect</Button>
    </HeaderContainer>
  );
};

export default Header;
