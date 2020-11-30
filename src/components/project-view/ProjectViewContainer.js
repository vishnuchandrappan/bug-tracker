import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import ProjectView from "./ProjectView";
import { NotFound } from "../layout/NotFound";

const ProjectViewContainer = () => {
  /** Get project id from route params */
  const { projectId } = useParams();

  /** Fetch Data from firebase */
  const projectRef = useFirestore()
    .collection("projects")
    .where("id", "==", projectId);
  const project = useFirestoreCollectionData(projectRef);

  return project.length > 0 ? <ProjectView {...project[0]} /> : <NotFound />;
};

export default ProjectViewContainer;
