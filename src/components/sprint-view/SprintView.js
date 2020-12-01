import { BackButton } from "../buttons/BackButton";
import SprintsContainer from "../sprints/SprintsContainer";

export const SprintView = ({ name, description, type }) => {
  return (
    <>
      <div className="container project-view">
        <BackButton />
        <h1 className="page-heading">{name}</h1>
        <span className="page-details">{description}</span>
      </div>
      <div className="project-contents">
        {type === "sprint" ? <SprintsContainer /> : ""}
      </div>
    </>
  );
};

export default SprintView;
