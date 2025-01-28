import styles from "./ProjectsStyles.module.css";
import statPaddr from "../../assets/statpaddr.png";
import librarydb from "../../assets/librarydb.png";
import clearcellgame from "../../assets/clearcellgame.png";
import portfolio from "../../assets/portfolio.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={statPaddr}
          link="https://github.com/Fieraol/Final_Project_Test"
          h3="StatPaddr"
          p="Live NBA Standings App"
        />
        <ProjectCard
          src={librarydb}
          link="https://github.com/Fieraol/library-database"
          h3="Library Database"
          p="Database of books with additional info using SQL"
        />
        <ProjectCard
          src={clearcellgame}
          link="https://github.com/Fieraol/ClearCellGame"
          h3="Clear Cell Game"
          p="A Java based game where the objective is to maximize the colored cells cleared from the board"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/Fieraol/fieraol-portfolio"
          h3="Portfolio"
          p="My portfolio created using React.js"
        />
      </div>
    </section>
  );
}

export default Projects;
