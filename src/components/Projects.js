export default function Projects() {
  return (
    <div className="component">
      <h2 className="title">Projects</h2>
      <div className="projects">
        <Project
          img={require("../images/checkers.jpg")}
          title="Checkers Pizza"
          desc="For my Web Development I course project, I created a website for a fictional pizza place called ‘Checkers’. It has four pages, a home page with cool images and posts, a menu page with all imaginary items available, a cart page and an account page. I got to use my skills learned throughout the course, including HTML tables, forms, lists, CSS styles, layouts, responsiveness, and JavaScript functionality."
          skills={["HTML", "CSS", "JavaScript"]}
        />
        <Project
          img={require("../images/comming-soon.jpg")}
          title="Game List"
          desc="MERN Stack application coming soon!"
          skills={["mongodb", "Express.js", "React", "Node.js"]}
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
        <p className="project-description">{desc}</p>
        <p>Skills used:</p>
        <ul className="project-skills">
          {skills.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
