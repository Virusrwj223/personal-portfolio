import styled from "styled-components";
import smartkarmaLogo from "../assets/Smartkarma.png";
import aStar from "../assets/AStar.png";
import nus from "../assets/nus.jpg";

const CompaniesSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10%;

  @media (max-width: 900px) {
    padding: 40px 5%;
  }

  @media (max-width: 600px) {
    padding: 30px 3%;
  }
`;

const CompaniesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
  max-width: 1100px;

  @media (max-width: 900px) {
    gap: 50px;
  }

  @media (max-width: 600px) {
    gap: 30px;
  }
`;

const Logo = styled.img`
  max-height: 50px;
  object-fit: contain;
  filter: grayscale(100%); /* Makes logos monochrome */
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    max-height: 45px;
  }

  @media (max-width: 600px) {
    max-height: 40px;
  }
`;

const Companies = () => {
  return (
    <CompaniesSection>
      <CompaniesContainer>
        <Logo src={smartkarmaLogo} alt="Smartkarma" />
        <Logo src={aStar} alt="AStar" />
        <Logo src={nus} alt="NUS" />
      </CompaniesContainer>
    </CompaniesSection>
  );
};

export default Companies;
