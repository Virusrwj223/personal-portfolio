import styled from "styled-components";
import project3Img from "../assets/oma.png";
import project2Img from "../assets/bare.png";
import { theme } from "../styles/theme";

const ProjectsSection = styled.section`
  padding: 20px 10%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.textPrimary};
  margin-bottom: 40px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const ProjectCard = styled.div`
  width: 280px; /* Reduced width for single-line display */
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 15px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  color: ${theme.textPrimary};
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: ${theme.textSecondary};
  margin: 8px 0 15px;
`;

const ViewButton = styled.a`
  display: inline-block;
  padding: 8px 12px;
  background-color: ${theme.primaryTeal};
  color: ${theme.darkGreen};
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s ease-in-out;
  font-size: 14px;

  &:hover {
    background-color: ${theme.darkGreen};
    color: white;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>Main Projects</Title>
      <ProjectsContainer>
        <ProjectCard>
          <ProjectImage src={project2Img} alt="Project 2" />
          <ProjectContent>
            <ProjectTitle>BAR-E</ProjectTitle>
            <ProjectDescription>
              A decentralized application for secure rental transactions.
            </ProjectDescription>
            <ViewButton href="https://bar-e.onrender.com/">
              View Project
            </ViewButton>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={project3Img} alt="Project 3" />
          <ProjectContent>
            <ProjectTitle>Oma</ProjectTitle>
            <ProjectDescription>
              An AI-enabled restaurant finder for foodies
            </ProjectDescription>
            <ViewButton href="https://www.theoma.site/">
              View Project
            </ViewButton>
          </ProjectContent>
        </ProjectCard>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
