import React from "react";
import { useHistory } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectCardContainer = (props) => {
  const history = useHistory();

  /** onClick on card; redirects to projects/:projectId */
  const routeToProject = () => {
    history.push(`/projects/${props.id}`);
  };

  return <ProjectCard routeToProject={routeToProject} {...props} />;
};

export default ProjectCardContainer;
