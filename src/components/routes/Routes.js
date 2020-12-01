import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import ProjectViewContainer from "../project-view/ProjectViewContainer";
import { ProjectsContainer } from "../projects/ProjectsContainer";
import { SprintViewContainer } from "../sprint-view/SprintViewContainer";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProjectsContainer} />
      <Route path="/projects" exact component={ProjectsContainer} />
      <Route
        path="/projects/:projectId"
        exact
        component={ProjectViewContainer}
      />
      <Route
        path="/projects/:projectId/sprints/:sprintId"
        component={SprintViewContainer}
      />

      <Route component={NotFound} />
    </Switch>
  );
};
