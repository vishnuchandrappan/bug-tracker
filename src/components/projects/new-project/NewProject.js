import { PlusCircle } from "react-feather";
import ProjectFormContainer from "./project-form/ProjectFormContainer";

export const NewProject = ({ show, showForm, hideForm }) => {
  return (
    <>
      <div className="project-card" onClick={showForm}>
        <span className="project-card--title">Create New Project</span>
        <div className="project-card--desc">
          <PlusCircle size={48} />
        </div>
      </div>
      <ProjectFormContainer show={show} hideForm={hideForm} />
    </>
  );
};
