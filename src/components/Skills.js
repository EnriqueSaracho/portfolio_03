// Importing SkillContainer, displays the skill icon and name.
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { GoDatabase } from "react-icons/go";
import { SiVisualstudiocode } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

// Component: Skills section.
export default function Skills() {
  return (
    <div className="component">
      <h2 className="title">Skills</h2>
      <div className="skills">
        <SkillsIcon icon={AiFillHtml5} name="HTML" />
        <SkillsIcon icon={DiCss3} name="CSS" />
        <SkillsIcon icon={SiJavascript} name="JavaScript" />
        <SkillsIcon icon={SiBootstrap} name="Bootstrap" />
        <SkillsIcon icon={SiMongodb} name="mongoDB" />
        <SkillsIcon icon={DiReact} name="React" />
        <SkillsIcon icon={DiNodejsSmall} name="Express" />
        <SkillsIcon icon={GoDatabase} name="SQL" />
        <SkillsIcon icon={SiPostgresql} name="PostreSQL" />
        <SkillsIcon icon={DiMysql} name="MySQL" />
        <SkillsIcon icon={SiCplusplus} name="C++" />
        <SkillsIcon icon={SiPhp} name="PHP" />
        <SkillsIcon icon={SiVisualstudiocode} name="VS Code" />
        <SkillsIcon icon={SiVisualstudio} name="Visual Studio" />
      </div>
    </div>
  );
}

// Function: builds the skill icon structure.
function SkillsIcon({ icon: Icon, name }) {
  return (
    <div className="skills-icon">
      <Icon className="skill-icon" />
      <p>{name}</p>
    </div>
  );
}
