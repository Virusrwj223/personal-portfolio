import styled from "styled-components";
import { FaMedium, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { theme } from "../styles/theme";

const FooterContainer = styled.footer`
  padding: 50px 0;
  text-align: center;
`;

const FollowText = styled.h3`
  font-size: 20px;
  color: ${theme.textPrimary};
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: ${theme.textSecondary};
  font-size: 22px;

  &:hover {
    background-color: ${theme.primaryTeal};
    color: #ffffff;
  }
`;
const CopyrightText = styled.p`
  font-size: 14px;
  color: ${theme.textSecondary};
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FollowText>Follow Me</FollowText>
      <IconContainer>
        <IconButton href="https://github.com/Virusrwj223" target="_blank">
          <FaGithub />
        </IconButton>
        <IconButton href="https://medium.com/@mhrishiraj" target="_blank">
          <FaMedium />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/hrishiraj-mandal" target="_blank">
          <FaLinkedin />
        </IconButton>
        <IconButton href="https://www.youtube.com/@hrishirajmandal5570" target="_blank">
          <FaYoutube />
        </IconButton>
      </IconContainer>
      <CopyrightText>© {new Date().getFullYear()} Hrishiraj Mandal.</CopyrightText>

    </FooterContainer>
  );
};

export default Footer;
