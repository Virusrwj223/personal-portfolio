import { FaMedium, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      {/* <h3 className="footer-title">Follow Me</h3> */}

      <div className="footer-icons">
        <a
          href="https://github.com/Virusrwj223"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://medium.com/@mhrishiraj"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaMedium />
        </a>

        <a
          href="https://www.linkedin.com/in/hrishiraj-mandal"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.youtube.com/@hrishirajmandal5570"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaYoutube />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Hrishiraj Mandal.
      </p>
    </footer>
  );
}
