import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactDetail() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const formValues = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    emailjs
      .send(
        "service_rhkgmy8",
        "template_r32hi82",
        formValues,
        "MOZvH0QB8VXEALMMU",
      )
      .then(
        () => {
          setMessage("Message sent successfully.");
          event.currentTarget.reset();
        },
        () => {
          setMessage("Failed to send message. Please try again.");
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact-layout">
      <div className="contact-form-card">
        <h2>Contact Form</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="user_name">Full Name</label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />

          <label htmlFor="user_email">Email</label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
          />

          <button type="submit" className="btn-primary contact-submit">
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {message && <p className="contact-status">{message}</p>}
        </form>
      </div>

      <aside className="contact-details-card">
        <h2>Contact Details</h2>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>Singapore</span>
        </div>

        <div className="contact-item">
          <FaEnvelope />
          <a href="mailto:mandal@u.nus.edu">mandal@u.nus.edu</a>
        </div>
      </aside>
    </section>
  );
}
