import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import ProjectView from "./ProjectView";
import { NotFound } from "../layout/NotFound";
import { createContext } from "react";

/** Object to be passed as context */
const projectData = {
  type: "sprint",
};
const ProjectViewContainer = () => {
  /** Get project id from route params */
  const { projectId } = useParams();

  /** Fetch Data from firebase */
  const projectRef = useFirestore()
    .collection("projects")
    .where("id", "==", projectId);
  const project = useFirestoreCollectionData(projectRef);

  projectData["id"] = projectId;

  return project.length > 0 ? (
    <ProjectContext.Provider value={projectData}>
      <ProjectView {...project[0]} type={projectData.type} />
    </ProjectContext.Provider>
  ) : (
    <NotFound />
  );
};

export default ProjectViewContainer;

export const ProjectContext = createContext(projectData);
