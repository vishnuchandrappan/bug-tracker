import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import ProjectViewContainer from "../project-view/ProjectViewContainer";
import ProjectsContainer from "../projects/ProjectsContainer";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProjectsContainer} />
      <Route path="/projects" exact component={ProjectsContainer} />
      <Route path="/projects/:projectId" component={ProjectViewContainer} />

      <Route component={NotFound} />
    </Switch>
  );
};
