export default function Projects() {
  return (
    <div className="component">
      <h2 className="title">Projects</h2>
      <div className="projects">
        <Project
          img={require("../images/bird.jpg")}
          alt="Mexican sweet bread"
          title="Mexican Sweet Bread"
          desc="This is just a test, it's supposed to represent a project."
          skills={["HTML", "CSS", "JavaScript"]}
        />
      </div>
    </div>
  );
}

function Project({ img, alt, title, desc, skills }) {
  return (
    <a href="../index.js" className="project">
      <img src={img} alt={alt} className="project-img" />
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
    </a>
  );
}
