import { useHistory } from "react-router-dom";
import PrimaryCard from "./PrimaryCard";

export const PrimaryCardContainer = ({ target, ...rest }) => {
  const history = useHistory();

  /** onClick on card; redirects to projects/:projectId */
  const routeToView = () => {
    history.push(target);
  };

  return <PrimaryCard routeToView={routeToView} {...rest} />;
};

export default PrimaryCardContainer;
