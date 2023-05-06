// Importing project component.
import { ProjectPage as Project } from "../components/Project";

// Page: Checkers Pizza project page.
export default function GameList() {
  return (
    <div>
      <Project
        img={require("../images/game-list-big.jpg")}
        title="Game List"
        desc="This MERN Stack application is a list of games that I've played and have yet to play. It allows me to input and display some information about each and also rate them based on my subjective opinion. Working on this project has allowed me to learn a few things like importing react components, React Router, Environmental Variables, HTTP Requests, useNavigate(), useState(), React Icons, Database Schemas, and more. (Not complete yet)"
        btn1={"https://github.com/EnriqueSaracho/portfolio_03"}
        btn1Text={"See Code"}
        skills={["mongoDB", "Express.js", "React", "Node.js"]}
      />
    </div>
  );
}
