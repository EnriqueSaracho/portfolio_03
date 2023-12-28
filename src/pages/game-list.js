// Importing project component.
import { ProjectPage as Project } from "../components/Project";

// Page: Checkers Pizza project page.
export default function GameList() {
  const images = [
    require("../images/game-list/game-list-home.jpg"),
    require("../images/game-list/game-list-sort.jpg"),
    require("../images/game-list/game-list-search.jpg"),
    require("../images/game-list/game-list-game-info.jpg"),
    require("../images/game-list/game-list-edit.jpg"),
    require("../images/game-list/game-list-edit2.jpg"),
    require("../images/game-list/game-list-edit3.jpg"),
    require("../images/game-list/game-list-add.jpg"),
  ];

  return (
    <div>
      <Project
        img={images}
        title="Game List"
        desc="This MERN Stack application is a list of games that I have played and have yet to play. It allows me to input and display some information about each and rate them based on my subjective opinion. Working on this project has allowed me to learn a few things like importing react components, React Router, Environmental Variables, HTTP Requests, useNavigate(), useState(), React Icons, Database Schemas, and more."
        btn1={"https://github.com/EnriqueSaracho/game-list"}
        btn1Text={"See Code"}
        skills={["mongoDB", "Express.js", "React", "Node.js"]}
      />
    </div>
  );
}
