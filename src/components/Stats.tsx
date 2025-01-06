import styled from "styled-components";
import { theme } from "../styles/theme";

const StatsSection = styled.section`
  padding: 50px 10%;
  text-align: center;

  @media (max-width: 900px) {
    padding: 40px 5%;
  }

  @media (max-width: 600px) {
    padding: 30px 4%;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 900px) {
    gap: 40px;
  }

  @media (max-width: 600px) {
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
  min-width: 150px;

  @media (max-width: 600px) {
    min-width: unset;
  }
`;

const StatNumber = styled.h3`
  font-size: 36px;
  font-weight: bold;
  color: ${theme.primaryTeal};
  margin-bottom: 5px;

  @media (max-width: 900px) {
    font-size: 32px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const StatLabel = styled.p`
  font-size: 16px;
  color: ${theme.textPrimary};

  @media (max-width: 900px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Stats = () => {
  return (
    <StatsSection>
      <StatsContainer>
        <StatItem>
          <StatNumber>4+</StatNumber>
          <StatLabel>Projects Completed</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>1🏆</StatNumber>
          <StatLabel>Hackathon Winner</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>6</StatNumber>
          <StatLabel>Months Internship</StatLabel>
        </StatItem>
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;
