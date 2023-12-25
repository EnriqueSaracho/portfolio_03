// Importing socials icons.
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

// Component: About section.
export default function About() {
  return (
    <div className="component">
      <h2 className="title">
        Hi, I'm <span className="name">Kiki</span>.
      </h2>
      <p className="about-text">
        Enrique Saracho Felix <br></br>
        Industrial Engineering / Computer Science<br></br>
        Vancouver, BC. <br></br>
        esarachof97@gmail.com <br></br>
        +1 (236) 863-5617
      </p>
      <a
        href={require("../files/Enrique_Saracho.pdf")}
        download="Enrique_Saracho.pdf"
        className="btn cv-btn"
      >
        CV <FaDownload />
      </a>
      <div className="socials">
        <a
          href="https://github.com/EnriqueSaracho"
          className="icon-a-tag"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <FaGithub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/enrique-saracho-felix/"
          className="icon-a-tag"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a
          href="mailto:esarachof97@gmail.com"
          className="icon-a-tag"
          title="Send mail"
        >
          <GrMail className="social-icon" />
        </a>
        <a href="tel:+1-236-863-5617" className="icon-a-tag" title="Call">
          <MdLocalPhone className="social-icon" />
        </a>
      </div>
    </div>
  );
}
