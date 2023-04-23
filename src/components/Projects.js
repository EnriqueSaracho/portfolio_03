// Importing SkillsIcon component.
import SkillsIcon from "./SkillsIcon";

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

function Project({ img, title, desc, skills }) {
  return (
    <div className="project">
      <img src={img} alt={title} className="project-img" />
      <h3 className="project-title">{title}</h3>
      <div className="project-text">
        <p className="project-description">
          {desc} <b>See more...</b>
        </p>
        <div className="project-skills">
          {skills.map((skill) => {
            return <SkillsIcon name={skill} />;
          })}
        </div>
      </div>
    </div>
  );
}
