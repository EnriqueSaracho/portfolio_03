// Importing project component.
import { ProjectPage as Project } from "../components/Project";

// Page: Checkers Pizza project page.
export default function Portfolio() {
  return (
    <div>
      <Project
        img={require("../images/portfolio-big.jpg")}
        title="Portfolio Website"
        desc="I build this porfolio with React. My primary objectives were to make it simple to understand and navigate, and also easy to update. React components, icons, react-router-dom, and JSX flexible code allowed me to achieve that. The home page containes three components/sections, one for my information and links, another one for my skills and finally the projects part. Each project has a page of its own (like this one) with links to the project or code."
        btn1={"https://github.com/EnriqueSaracho/portfolio_03"}
        btn1Text={"See Code"}
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />
    </div>
  );
}
