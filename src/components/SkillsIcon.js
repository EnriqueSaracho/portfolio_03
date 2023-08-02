// Importing SkillContainer, displays the skill icon and name.
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
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
import { BsUnity } from "react-icons/bs";
import { DiJava } from "react-icons/di";

// Component: builds the skill icon structure.
export default function SkillsIcon({ name }) {
  let Icon = null;
  switch (name) {
    case "HTML":
      Icon = AiFillHtml5;
      break;
    case "CSS":
      Icon = DiCss3;
      break;
    case "JavaScript":
      Icon = SiJavascript;
      break;
    case "SQL":
      Icon = GoDatabase;
      break;
    case "VS Code":
      Icon = SiVisualstudiocode;
      break;
    case "Visual Studio":
      Icon = SiVisualstudio;
      break;
    case "Bootstrap":
      Icon = SiBootstrap;
      break;
    case "PostreSQL":
      Icon = SiPostgresql;
      break;
    case "MySQL":
      Icon = DiMysql;
      break;
    case "PHP":
      Icon = SiPhp;
      break;
    case "mongoDB":
      Icon = SiMongodb;
      break;
    case "React":
      Icon = DiReact;
      break;
    case "Node.js":
      Icon = DiNodejsSmall;
      break;
    case "C++":
      Icon = SiCplusplus;
      break;
    case "Unity":
      Icon = BsUnity;
      break;
    case "Java":
      Icon = DiJava;
      break;
    default:
      Icon = AiFillHtml5;
  }
  return (
    <div className="skills-icon">
      <Icon className="skill-icon" />
      <p>{name}</p>
    </div>
  );
}
