import BugsContainer from "../bugs/BugsContainer";
import { BackButton } from "../buttons/BackButton";

export const SprintView = ({ name, description, type }) => {
  return (
    <>
      <div className="container project-view">
        <BackButton />
        <h1 className="page-heading">{name}</h1>
        <span className="page-details">{description}</span>
      </div>
      <div className="project-contents">
        <BugsContainer />
      </div>
    </>
  );
};

export default SprintView;
