import { useState } from "react";
import { NewItem } from "./NewItem";

export const NewItemContainer = ({ title, Component, ...rest }) => {
  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(true);
  };

  const hideForm = () => {
    setShow(false);
  };

  const data = {
    show,
    showForm,
    hideForm,
  };

  return <NewItem title={title} Component={Component} {...rest} {...data} />;
};
