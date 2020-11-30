const ProjectCard = ({ name, description, routeToProject }) => {
  return (
    <div className="project-card" onClick={routeToProject}>
      <span className="project-card--title">{name}</span>
      <span className="project-card--desc">{description}</span>
    </div>
  );
};

export default ProjectCard;
