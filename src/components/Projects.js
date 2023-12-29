// Importing Project component.
import { ProjectThumbnail as Project } from "./Project";

/**
 * Projects component.
 */
export default function Projects() {
  return (
    <div className="component container2">
      {/* Title */}
      <h2 className="title">Projects</h2>

      {/* Projects list */}
      <div className="projects">
        <Project
          img={require("../images/game-list/game-list.jpg")}
          title="Game List"
          desc={"A video game catalog with cool features."}
          skills={["mongoDB", "Express.js", "React", "Node.js"]}
          path="/game-list"
        />
        <Project
          img={require("../images/checkers/checkers.jpg")}
          title="Checkers Pizza"
          desc="Web Development I course project. It's a website for a fictional pizza place called Checkers!"
          skills={["HTML", "CSS", "JavaScript"]}
          path="/checkers"
        />
        <Project
          img={require("../images/portfolio/portfolio.jpg")}
          title="Portfolio Website"
          desc="This Portfolio! Simple and flexible with project pages and links."
          skills={["HTML", "CSS", "JavaScript", "React"]}
          path="/portfolio"
        />
      </div>
    </div>
  );
}
