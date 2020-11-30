import React from "react";
import { Button } from "@material-ui/core";
import { Loader } from "react-feather";

export const SubmitButton = ({
  children = "Submit",
  isSubmitting = false,
  color = "primary",
  ...rest
}) => {
  return isSubmitting ? (
    <Button className="custom-btn" variant="contained" color={color}>
      <Loader className="loader" />
    </Button>
  ) : (
    <Button className="custom-btn" variant="contained" color={color} {...rest}>
      {children}
    </Button>
  );
};
