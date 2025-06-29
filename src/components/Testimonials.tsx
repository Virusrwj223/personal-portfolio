import React, { useRef, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import skTestimonial from "../assets/SK-general.pdf";
import vjcTestimonial from "../assets/VJC_Testimonial.pdf";
import ariaCert from "../assets/ARIA_Certificate.pdf";
import user1 from "../assets/SMLogo.png";
import user2 from "../assets/vjc.png";
import user3 from "../assets/astarLogo.png";
import { theme } from "../styles/theme";

const TestimonialsSection = styled.section`
  padding: 50px 10%;
  text-align: center;
  @media (max-width: 900px) {
    padding: 40px 5%;
  }
  @media (max-width: 600px) {
    padding: 30px 4%;
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

// Wrap each slide so we can center its child
const SlideWrapper = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const TestimonialCard = styled.div`
  background: ${theme.darkGreen};
  color: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 0;
  color: ${theme.textSecondary};
  @media (max-width: 900px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const testimonials = [
  {
    text: `What impressed me most is Raj's agility. Raj is always able to overcome technical challenges efficiently and exhibits a high spirit of teamwork to deliver a greater good.`,
    name: "Dr. Liu Ning",
    position: "Senior Scientist I, Vice-Group Director",
    image: user3,
    pdf: ariaCert,
  },
  {
    text: `Hrishiraj showcased a rare combination of technical expertise and an unyielding willingness to learn.`,
    name: "Surya Ravikumar",
    position: "VP, Data & Strategy of Smartkarma",
    image: user1,
    pdf: skTestimonial,
  },
  {
    text: `[Hrishiraj] will pour time and effort into what he feels are worthwhile causes.`,
    name: "Liew Hui Min",
    position: "Form Teacher of Victoria Junior College",
    image: user2,
    pdf: vjcTestimonial,
  },
];

const Testimonials: React.FC = () => {
  const [minHeight, setMinHeight] = useState<number>(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // measure tallest card on mount and on resize
  useLayoutEffect(() => {
    const measure = () => {
      const heights = cardRefs.current.map((el) => el?.offsetHeight ?? 0);
      const tallest = Math.max(...heights);
      setMinHeight(tallest);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <TestimonialsSection>
      <Title>What People Say</Title>
      <Slider {...settings}>
        {testimonials.map(({ text, name, position, image, pdf }, i) => (
          <SlideWrapper key={i}>
            <TestimonialCard
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ minHeight: minHeight || undefined }}
            >
              {`"${text}"`}
              <UserInfo>
                <a href={pdf} target="_blank" rel="noopener noreferrer">
                  <UserImage src={image} alt={name} />
                </a>
                <UserDetails>
                  <UserName>{name}</UserName>
                  <UserPosition>{position}</UserPosition>
                </UserDetails>
              </UserInfo>
            </TestimonialCard>
          </SlideWrapper>
        ))}
      </Slider>
    </TestimonialsSection>
  );
};

export default Testimonials;
