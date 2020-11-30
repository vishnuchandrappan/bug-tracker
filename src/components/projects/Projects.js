import { MapData } from "../facades/MapData";
import { NewProjectContainer } from "./new-project/NewProjectContainer";
import ProjectCardContainer from "./project-card/ProjectCardContainer";

const Projects = ({ projects }) => {
  return (
    <div className="projects container">
      <h1 className="page-heading">Projects</h1>
      <div className="projects-content">
        <MapData data={projects} Component={ProjectCardContainer} />
        <NewProjectContainer />
      </div>
    </div>
  );
};

export default Projects;
