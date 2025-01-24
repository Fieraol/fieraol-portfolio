import styles from "./ProjectsStyles.module.css";
import statPaddr from "../../assets/statpaddr.png";
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
          src={statPaddr}
          link="https://github.com/Fieraol/Final_Project_Test"
          h3="StatPaddr"
          p="Live NBA Standings App"
        />
      </div>
    </section>
  );
}

export default Projects;
