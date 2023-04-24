// Importing useNavigate.
import { useNavigate } from "react-router-dom";

// Importing SkillsIcon component.
import SkillsIcon from "./SkillsIcon";

// Component: project component for projects section in home page.
function ProjectThumbnail({ img, title, desc, skills }) {
  const navigate = useNavigate();

  return (
    <div
      className="project"
      onClick={() => {
        navigate("/checkers");
      }}
    >
      <img src={img} alt={title} className="project-img" />
      <h3 className="project-title">{title}</h3>
      <div className="project-text">
        <p className="project-description">
          {desc} <b className="see-more">See more...</b>
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

// Component: Project component for project page.
function ProjectPage({
  img,
  title,
  desc,
  btn1,
  btn1Text,
  btn2,
  btn2Text,
  skills,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="btn go-back"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
      <div className="project-page">
        <div className="project-info">
          <h2 className="project-info-title">{title}</h2>
          <div className="project-info-text">
            <p>{desc}</p>
            <div className="project-skills">
              {skills.map((skill) => {
                return <SkillsIcon name={skill} />;
              })}
            </div>
          </div>
          <div className="project-info-btns">
            <a href={btn1} className="btn project-page-btn">
              {btn1Text}
            </a>
            {btn2 ? (
              <a href={btn2} className="btn project-page-btn">
                {btn2Text}
              </a>
            ) : null}
          </div>
        </div>
        <img src={img} alt={title} className="project-page-img" />
      </div>
      <button
        className="btn go-back"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export { ProjectThumbnail, ProjectPage };
