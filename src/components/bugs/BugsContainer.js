import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { useContext } from "react";
import { ProjectContext } from "../project-view/ProjectViewContainer";
import { SprintContext } from "../sprint-view/SprintViewContainer";
import Bugs from "./Bugs";

export const BugsContainer = () => {
  const { id, type } = useContext(ProjectContext);
  const { sprintId } = useContext(SprintContext);
  const key = type === "sprint" ? sprintId : id;

  /** Fetching Projects data from firebase */
  const bugsRef = useFirestore()
    .collection("bugs")
    .where("association_type", "==", type)
    .where("association_id", "==", key);
  const bugs = useFirestoreCollectionData(bugsRef);

  const modificationsRef = useFirestore()
    .collection("modifications")
    .where("association_type", "==", type)
    .where("association_id", "==", key);
  const modifications = useFirestoreCollectionData(modificationsRef);

  return <Bugs bugs={bugs} modifications={modifications} />;
};

export default BugsContainer;
