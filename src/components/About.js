// Importing socials icons.
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

// Component: About section.
export default function About() {
  return (
    <div className="component">
      <h2 className="title">
        Hi, I'm <span className="name">Kiki</span>.
      </h2>
      <p className="about-text">Enrique Saracho Felix</p>
      <div className="socials">
        <a
          href="https://github.com/EnriqueSaracho"
          className="icon-a-tag"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/enrique-saracho-felix/"
          className="icon-a-tag"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a href="mailto:esarachof97@gmail.com" className="icon-a-tag">
          <GrMail className="social-icon" />
        </a>
      </div>
    </div>
  );
}
