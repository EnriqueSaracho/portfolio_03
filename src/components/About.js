import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";

// Component: About section.
export default function About() {
  return (
    <div className="component">
      <h2 className="title">
        Hello there, I'm <span className="name">Enrique</span>.
      </h2>
      <p className="about-text">
        I'm a Computer Science student in Vancouver. I like creating apps,
        watching basketball, and flan.
      </p>
      <div className="socials">
        <a href="https://github.com/EnriqueSaracho" className="icon-a-tag">
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/enrique-saracho-felix/"
          className="icon-a-tag"
        >
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/EnriqueSaracho" className="icon-a-tag">
          <GrMail className="icon" />
        </a>
        <a href="https://github.com/EnriqueSaracho" className="icon-a-tag">
          <FaInstagramSquare className="icon" />
        </a>
      </div>
    </div>
  );
}
