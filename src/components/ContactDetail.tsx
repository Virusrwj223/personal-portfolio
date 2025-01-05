import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { theme } from "../styles/theme";

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 10% 80px; 
  gap: 100px;
`;

const FormContainer = styled.div`
  flex: 1.2; 
  background: #ffffff;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 900px;
`;

const ContactDetails = styled.div`
  flex: 0.8; 
  padding: 50px;
  border-radius: 12px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: ${theme.textPrimary};
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${theme.textPrimary};
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${theme.border};
  border-radius: 8px;
  background: #f8f8f8;
  font-size: 16px;
  color:${theme.textPrimary};
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: ${theme.primaryTeal};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${theme.border};
  border-radius: 8px;
  background: #f8f8f8;
  font-size: 16px;
  color: ${theme.textPrimary};
  outline: none;
  height: 120px;
  resize: none;
  margin-bottom: 20px;

  &:focus {
    border-color: ${theme.primaryTeal};
  }
`;

const SendMessageButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${theme.primaryTeal};
  color: #ffffff;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.darkGreen};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  color: ${theme.textPrimary};
`;

const ContactDetail = () => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget); 
        const formValues = {
          user_name: formData.get("user_name") as string,
          user_email: formData.get("user_email") as string,
          subject: formData.get("subject") as string,
          message: formData.get("message") as string,
        };
    
        emailjs
          .send("service_rhkgmy8", "template_r32hi82", formValues, "MOZvH0QB8VXEALMMU")
          .then(
            (result) => {
              console.log("Email sent successfully:", result.text);
              setMessage("Message sent successfully!");
              event.currentTarget.reset(); 
            },
            (error) => {
              console.error("Email sending failed:", error.text);
              setMessage("Failed to send message. Please try again.");
            }
          );
          alert(message)
      };
  
    return (
      <ContactSection>
        <FormContainer>
          <Title>Contact Form</Title>
          <form onSubmit={handleSubmit}>
            <Label>Full Name</Label>
            <Input type="text" name="user_name" placeholder="Your Name" required />
  
            <Label>Email</Label>
            <Input type="email" name="user_email" placeholder="Your email" required />
  
            <Label>Subject</Label>
            <Input type="text" name="subject" placeholder="Subject" required />
  
            <Label>Message</Label>
            <Textarea name="message" placeholder="Your message" required></Textarea>
  
            <SendMessageButton type="submit">Send Message</SendMessageButton>
            {message && <p>{message}</p>}
          </form>
        </FormContainer>

      <ContactDetails>
        <Title>Contact Details</Title>
        <ContactItem>
          <FaMapMarkerAlt /> Singapore
        </ContactItem>
        <ContactItem>
          <FaEnvelope /> mandal@u.nus.edu
        </ContactItem>
      </ContactDetails>
    </ContactSection>
  );
};

export default ContactDetail;
