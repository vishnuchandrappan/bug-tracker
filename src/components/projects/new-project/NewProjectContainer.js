import { useState } from "react";
import { NewProject } from "./NewProject";

export const NewProjectContainer = () => {
  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(true);
  };

  const hideForm = () => {
    setShow(false);
  };

  const props = {
    show,
    showForm,
    hideForm,
  };

  return <NewProject {...props} />;
};
