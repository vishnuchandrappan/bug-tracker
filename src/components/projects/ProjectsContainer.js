import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { CardLayout } from "../cards/CardLayout";
import ProjectFormContainer from "./new-project/ProjectFormContainer";

export const ProjectsContainer = () => {
  /** Fetching Projects data from firebase */
  const projectsRef = useFirestore().collection("projects");
  const projects = useFirestoreCollectionData(projectsRef);

  return (
    <CardLayout
      title="Project"
      data={projects}
      NewDataComponent={ProjectFormContainer}
    />
  );
};

export default ProjectsContainer;
