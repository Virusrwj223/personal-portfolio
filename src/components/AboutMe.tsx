import styled from "styled-components";
import profileImage from "../assets/raj.jpg"; // Replace with your actual image path
import { theme } from "../styles/theme";

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

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${theme.lightBg};
  color: ${theme.darkGreen};
  border: 1px solid ${theme.border};
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color:${theme.primaryTeal};
    color: ${theme.textPrimary};
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
        <CVButton href="../assets/HrishirajMandalResume.pdf" download>
          <span>Resume</span>
        </CVButton>
      </TextContainer>
      <ImageContainer>
        <img src={profileImage} alt="Ethan's Profile" />
      </ImageContainer>
    </AboutSection>
  );
};

export default AboutMe;
