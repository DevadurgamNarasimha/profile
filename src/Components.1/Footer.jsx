import "../Styles/Footer.css"
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Devadurgam Narasimha. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://github.com/DevadurgamNarasimha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/narasimha-devadurgam-9597292b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a href="mailto:devadurgam.nara@gmail.com">
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;