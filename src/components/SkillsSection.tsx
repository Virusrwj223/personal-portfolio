import styled from "styled-components";
import { FaJs, FaNodeJs, FaReact, FaGithub, FaPython } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiPostgresql, SiPytorch, SiTurborepo, SiTypescript } from "react-icons/si";
import { theme } from "../styles/theme";
import { VscAzure } from "react-icons/vsc";

const SkillsContainer = styled.section`
  text-align: center;
  padding: 20px 10%;
  background: ${theme.lightBg};
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  color: ${theme.textPrimary};
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
  
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  width: 200px;
  height: 120px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 50px;
  color: ${theme.textPrimary};
  margin-bottom: 10px;
`;

const SkillName = styled.p`
  font-size: 18px;
  color: ${theme.textPrimary};
  font-weight: 500;
`;

const skills = [
    { name: "Javascript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node", icon: <FaNodeJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "TurboRepo", icon: <SiTurborepo /> },
  { name: "SQL", icon: <SiPostgresql /> },
  { name: "MongoDb", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "pyTorch", icon: <SiPytorch /> },
  { name: "Azure", icon: <VscAzure /> },
  
  { name: "Github", icon: <FaGithub /> },
  
];

const SkillsSection = () => {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <Grid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </SkillsContainer>
  );
};

export default SkillsSection;
