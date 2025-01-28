import styles from "./HeaderStyles.module.css";
import headerImg from "../../assets/header-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Fieraol_Shiferaw_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme == "light" ? sun : moon;
  const twitterIcon = theme == "light" ? twitterLight : twitterDark;
  const githubIcon = theme == "light" ? githubLight : githubDark;
  const linkedinIcon = theme == "light" ? linkedinLight : linkedinDark;

  return (
    <section id="header" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.header}
          src={headerImg}
          alt="Fieraol Shiferaw profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Fieraol
          <br />
          Shiferaw
        </h1>
        <h2>Full-Stack Software Engineer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Fieraol/" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://linkedin.com/in/fieraol-shiferaw/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          Well versed in a multitude of full stack application development
          technologies and programs. Skilled in problem-solving and critical
          thinking, as well as collaboration, leadership, and adaptability.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Header;
