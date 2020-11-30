import Projects from "./Projects";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

export default function ProjectsContainer() {
  /** Fetching Projects data from firebase */
  const projectsRef = useFirestore().collection("projects");
  const projects = useFirestoreCollectionData(projectsRef);

  return <Projects projects={projects} />;
}
