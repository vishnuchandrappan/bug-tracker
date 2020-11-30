import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { useContext } from "react";
import { ProjectContext } from "../project-view/ProjectViewContainer";
import { CardLayout } from "../cards/CardLayout";
import SprintFormContainer from "./new-sprint/SprintFormContainer";

export const SprintsContainer = () => {
  const { id } = useContext(ProjectContext);

  /** Fetching Projects data from firebase */
  const sprintsRef = useFirestore()
    .collection("sprints")
    .where("project_id", "==", id);
  const sprints = useFirestoreCollectionData(sprintsRef);

  return (
    <CardLayout
      title="Sprint"
      data={sprints}
      NewDataComponent={SprintFormContainer}
    />
  );
};

export default SprintsContainer;
