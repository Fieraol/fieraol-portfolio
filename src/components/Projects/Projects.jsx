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
          p="NBA Standings App"
        />
        <ProjectCard
          src={librarydb}
          link="https://github.com/Fieraol/library-database"
          h3="Library Database"
          p="Book SQL Database"
        />
        <ProjectCard
          src={clearcellgame}
          link="https://github.com/Fieraol/ClearCellGame"
          h3="Clear Cell Game"
          p="Java game"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/Fieraol/fieraol-portfolio"
          h3="Portfolio"
          p="React.js portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
