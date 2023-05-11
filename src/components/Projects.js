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
          path="/checkers"
        />
        <Project
          img={require("../images/portfolio.jpg")}
          title="Portfolio Website"
          desc="This Portfolio! Simple and flexible with project pages and links."
          skills={["HTML", "CSS", "JavaScript", "React"]}
          path="/portfolio"
        />
        <Project
          img={require("../images/game-list.jpg")}
          title="Game List"
          desc="A MERN Stack application that lists games and has cool features."
          skills={["mongoDB", "Express.js", "React", "Node.js"]}
          path="/game-list"
        />
      </div>
    </div>
  );
}
