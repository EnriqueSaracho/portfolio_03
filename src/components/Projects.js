// Importing Project component.
import { ProjectThumbnail as Project } from "./Project";

// Component: Projects section
export default function Projects() {
  return (
    <div className="component container2">
      <h2 className="title">Projects</h2>
      <div className="projects">
        <Project
          img={require("../images/checkers.jpg")}
          title="Checkers Pizza"
          desc="Web Development I course project. It's a website for a fictional pizza place called Checkers!"
          skills={["HTML", "CSS", "JavaScript"]}
        />
        <Project
          img={require("../images/comming-soon.jpg")}
          title="Game List"
          desc="MERN Stack application coming soon!"
          skills={["mongoDB", "Express.js", "React", "Node.js"]}
        />
      </div>
    </div>
  );
}
