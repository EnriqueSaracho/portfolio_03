// Importing project component.
import { ProjectPage as Project } from "../components/Project";

// Page: Checkers Pizza project page.
export default function Checkers() {
  return (
    <div>
      <Project
        img={require("../images/checkers.jpg")}
        title="Checkers Pizza"
        desc="For my Web Development I course project, I created a website for a fictional pizza place called ‘Checkers’. It has four pages, a home page with cool images and posts, a menu page with all imaginary items available, a cart page and an account page. I got to use the skills learned throughout the course, including HTML tables, forms, lists, CSS styles, layouts, responsiveness, and JavaScript functionality."
        skills={["HTML", "CSS", "JavaScript"]}
      />
    </div>
  );
}