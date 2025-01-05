import styled from "styled-components";
import smartkarmaLogo from "../assets/Smartkarma.png"; 
import aStar from "../assets/AStar.png"; 
import fintechSoc from "../assets/FintechSoc.png"; 

const CompaniesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10%;
`;

const CompaniesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
  max-width: 1100px;
`;

const Logo = styled.img`
  max-height: 50px;
  object-fit: contain;
  filter: grayscale(100%); /* Optional: Makes logos monochrome */
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;

const Companies = () => {
  return (
    <CompaniesSection>
      <CompaniesContainer>
        <Logo src={smartkarmaLogo} alt="Smartkarma" />
        <Logo src={aStar} alt="AStar" />
        <Logo src={fintechSoc} alt="FintechSoc" />
      </CompaniesContainer>
    </CompaniesSection>
  );
};

export default Companies;
