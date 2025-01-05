import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import user1 from "../assets/SMLogo.png";
import user2 from "../assets/vjc.png";
import { theme } from "../styles/theme";

const TestimonialsSection = styled.section`
  padding: 10px 10%;
  text-align: center;
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
`;

const UserDetails = styled.div`
  text-align: left;
`;

const UserName = styled.h4`
  font-size: 18px;
  margin: 0;
`;

const UserPosition = styled.p`
  font-size: 14px;
  color: ${theme.textSecondary};
  margin: 0;
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <TestimonialsSection>
      <h2>What People Say</h2>
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <TestimonialCard>
              "Hrishiraj showcased a rare combination of technical expertise and an unyielding willingness to learn."
              <UserInfo>
                <UserImage src={user1} alt="User 1" />
                <UserDetails>
                  <UserName>Surya Ravikumar</UserName>
                  <UserPosition>VP, Data & Strategy of Smartkarma</UserPosition>
                </UserDetails>
              </UserInfo>
            </TestimonialCard>
          </div>

          <div>
            <TestimonialCard>
              "[Hrishiraj] will pour time and effort into what he feels are worthwhile causes"
              <UserInfo>
                <UserImage src={user2} alt="User 2" />
                <UserDetails>
                  <UserName>Liew Hui Min</UserName>
                  <UserPosition>Form Teacher of Victoria Junior College</UserPosition>
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
