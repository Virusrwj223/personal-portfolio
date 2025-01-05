import styled from "styled-components";
import profileImage from "../assets/funPic.jpg";
import { theme } from "../styles/theme";

const StatementSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  padding: 80px 12% 5px;
  gap: 50px; 

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 280px; 
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-left: -50px;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }
`;

const TextContainer = styled.div`
  flex: 1; 
  max-width: 980px; 
  font-size: 18px;
  color: ${theme.textPrimary};
  line-height: 1.8;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 16px;
    text-align: left;
  }

  .highlight {
    font-weight: bold;
    color: ${theme.darkGreen};
  }
`;

const PersonalStatement = () => {
  return (
    <StatementSection>
      <ImageContainer>
        <img src={profileImage} alt="Personal" />
      </ImageContainer>
      <TextContainer>
        <p>
        I began my programming journey just a year before matriculation, diving headfirst into a world that once felt foreign. 
        My first internship was where I truly learned—where the real-world challenges forced me to <span className="highlight">
            adapt, problem-solve, and grow beyond just writing code. </span>
        It was my time in university that I realized software engineering is not just programming. It’s about systems, principles, 
        and the discipline behind building technology that lasts. Clean code is not enough; it must be maintainable, scalable, and ethical. 
        </p>
        <p>
        More than just technology, <span className="highlight">I value people.</span> I believe that collaboration fosters innovation, 
        and I thrive in environments where ideas are freely exchanged and built upon. 
        I am particularly drawn to ground up projects that initiate change. Whether through open-source contributions, hackathons, 
        or local initiatives, I aim to connect with others who share the same drive, working together to bring impactful ideas to life.
        {/* <span className="highlight"></span> */}
        </p>
      </TextContainer>
    </StatementSection>
  );
};

export default PersonalStatement;
