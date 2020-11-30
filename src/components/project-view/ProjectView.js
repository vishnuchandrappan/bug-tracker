import { BackButton } from "../buttons/BackButton";

const ProjectView = ({ name, description }) => {
  return (
    <div className="container project-view">
      <BackButton target="/projects" />
      <h1 className="page-heading">{name}</h1>
      <span className="page-details">{description}</span>
    </div>
  );
};

export default ProjectView;
