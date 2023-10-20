import style from "@/styles/projects.module.css";
import Project1 from "./project1";
import Project2 from "./project2";

const Projects = () => {
  return (
    <div className={style.projects} id="portfolio">
      <div className={style.projectsConteiner}>
        <p className={style.projectsHeader}>Проекты</p>
        <div className={style.projectsInfo}>
          <Project1 />
          <Project2 />
        </div>
      </div>
    </div>
  );
};

export default Projects;
