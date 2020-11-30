import React from "react";
import { Button } from "@material-ui/core";

export const LogoutButton = ({ children = "Logout", ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
