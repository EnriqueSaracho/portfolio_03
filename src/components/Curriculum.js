import { FaDownload } from "react-icons/fa";

// Component: About section.
export default function About() {
  return (
    <div className="component">
      <h2 className="title">CV</h2>
      <div className="curriculum">
        <a
          href={require("../files/Enrique_Saracho.pdf")}
          download="Enrique_Saracho.pdf"
          className="btn"
        >
          Download <FaDownload />
        </a>
      </div>
    </div>
  );
}
