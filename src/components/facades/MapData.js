import { useContext } from "react";
import { ProjectContext } from "../project-view/ProjectViewContainer";

export const MapData = ({ title = null, data, Component, ...rest }) => {
  const { id } = useContext(ProjectContext);

  const base = title === "Sprints" ? `/projects/${id}` : "";

  return (
    <>
      {data.length === 0 && (
        <span className="align-center">No data found !</span>
      )}
      {data.map((item) => (
        <Component
          {...item}
          {...rest}
          key={item.id}
          target={
            title !== null ? `${base}/${title.toLowerCase()}/${item.id}` : ""
          }
        />
      ))}
    </>
  );
};
