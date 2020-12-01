import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { SprintView } from "./SprintView";
import { NotFound } from "../layout/NotFound";
import { createContext } from "react";

/** Object to be passed as context */
const sprintData = {};
export const SprintViewContainer = () => {
  /** Get sprint id from route params */
  const { sprintId } = useParams();

  /** Fetch Data from firebase */
  const sprintRef = useFirestore()
    .collection("sprints")
    .where("id", "==", sprintId);
  const sprint = useFirestoreCollectionData(sprintRef);

  sprintData["id"] = sprintId;
  sprintData["content"] = sprint;

  return sprint.length > 0 ? (
    <SprintContext.Provider value={sprintData}>
      <SprintView {...sprint[0]} type={sprintData.type} />
    </SprintContext.Provider>
  ) : (
    <NotFound />
  );
};

export default SprintViewContainer;

export const SprintContext = createContext(sprintData);
