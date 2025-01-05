import styled from "styled-components";
import profileImage from "../assets/raj.jpg"; 
import { theme } from "../styles/theme";
import resume from "../assets/HrishirajMandalResume.pdf";


const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 10%;
  gap: 170px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  max-width: 500px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    color: ${theme.textPrimary};
  }

  p {
    font-size: 18px;
    color: ${theme.textSecondary};
    line-height: 1.6;
  }

  .highlight {
    font-weight: bold;
    color: ${theme.darkGreen};
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: auto;

  @media (max-width: 900px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &.learn-more {
    background-color:${theme.lightBg};
    color: ${theme.darkGreen};
    border: 1px solid ${theme.border};

    &:hover {
      background-color: ${theme.lightBg};
      color: ${theme.textPrimary};
    }
    
  }

  &.cv-button {
    background-color: ${theme.primaryTeal};
    color: #ffffff;
    border: 1px solid ${theme.primaryTeal};

    &:hover {
      background-color: ${theme.darkGreen};
    }
  }
`;
const AboutMe = () => {
  return (
    <AboutSection id="about">
      <TextContainer>
        <h1>HI, I AM RAJ</h1>
        <p>
          I am a <span className="highlight">Computer Science</span> student at <span className="highlight">NUS</span>. Passionate about 
          <span className="highlight"> Information Security</span> and <span className="highlight">Machine Learning</span>,
          I have many interests.
        </p>
        <p>Scroll on to get to know me!</p>
        <ButtonContainer>
          <Button href="/aboutMe" className="learn-more">About Me</Button>
          <Button href={resume} target="_blank" rel="noopener noreferrer" className="cv-button">Resume</Button>
        </ButtonContainer>
        
      </TextContainer>
      <ImageContainer>
        <img src={profileImage} alt="Raj's Profile" />
      </ImageContainer>
    </AboutSection>
  );
};

export default AboutMe;
