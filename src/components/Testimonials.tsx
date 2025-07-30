import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skTestimonial from "../assets/SK-general.pdf";
import vjcTestimonial from "../assets/VJC_Testimonial.pdf";
import ariaCert from "../assets/astar_testimonial and cert.pdf";

import user1 from "../assets/SMLogo.png";
import user2 from "../assets/vjc.png";
import user3 from "../assets/astarLogo.png";
import { theme } from "../styles/theme";

const TestimonialsSection = styled.section`
  padding: 50px 10%;
  text-align: center;

  @media (max-width: 900px) {
    padding: 40px 5%;
    width: 300px;
  }

  @media (max-width: 600px) {
    padding: 30px 4%;
    width: 300px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  color: ${theme.textPrimary};
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const CarouselWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: ${theme.darkGreen};
  color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  position: relative;
  text-align: left;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 900px) {
    font-size: 16px;
    padding: 25px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 20px;
  }

  &::before {
    font-size: 50px;
    color: ${theme.primaryTeal};
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;

const UserInfo = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const UserDetails = styled.div`
  text-align: left;
`;

const UserName = styled.h4`
  font-size: 18px;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const UserPosition = styled.p`
  font-size: 14px;
  color: ${theme.textSecondary};
  margin: 0;

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700, // Slightly slower transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Increased to 5s for better readability
    arrows: false, // Hides arrows for a cleaner look
  };

  return (
    <TestimonialsSection>
      <Title>What People Say</Title>
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <TestimonialCard>
              "What impressed me most is Raj's agility. Raj is always able to
              overcome technical challenges efficiently and exhibits a high
              spirit of teamwork to deliver a greater good."
              <UserInfo>
                <a
                  href={ariaCert}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "8px", fontSize: "0.9rem" }}
                >
                  <UserImage src={user3} alt="User 3" />
                </a>
                <UserDetails>
                  <UserName>Dr. Liu Ning</UserName>
                  <UserPosition>
                    Senior Scientist I, Vice-Group Director
                  </UserPosition>
                </UserDetails>
              </UserInfo>
            </TestimonialCard>
          </div>

          <div>
            <TestimonialCard>
              "Hrishiraj showcased a rare combination of technical expertise and
              an unyielding willingness to learn."
              <UserInfo>
                <a
                  href={skTestimonial}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "8px", fontSize: "0.9rem" }}
                >
                  <UserImage src={user1} alt="User 1" />
                </a>
                <UserDetails>
                  <UserName>Surya Ravikumar</UserName>
                  <UserPosition>VP, Data & Strategy of Smartkarma</UserPosition>
                </UserDetails>
              </UserInfo>
            </TestimonialCard>
          </div>

          <div>
            <TestimonialCard>
              "[Hrishiraj] will pour time and effort into what he feels are
              worthwhile causes."
              <UserInfo>
                <a
                  href={vjcTestimonial}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "8px", fontSize: "0.9rem" }}
                >
                  <UserImage src={user2} alt="User 2" />
                </a>
                <UserDetails>
                  <UserName>Liew Hui Min</UserName>
                  <UserPosition>
                    Form Teacher of Victoria Junior College
                  </UserPosition>
                </UserDetails>
              </UserInfo>
            </TestimonialCard>
          </div>
        </Slider>
      </CarouselWrapper>
    </TestimonialsSection>
  );
};

export default Testimonials;
