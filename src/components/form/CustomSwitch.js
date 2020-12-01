import { FormControlLabel, Switch } from "@material-ui/core";
import { useState } from "react";

const CustomSwitch = ({ label, color = "secondary", ...rest }) => {

  const [checked, setChecked] = useState(rest.value);

  const toggleSwitch = () => {
    setChecked((checked) => !checked);
  };

  return (
    <FormControlLabel
      value="top"
      control={
        <Switch
          checked={checked}
          onChange={toggleSwitch}
          color={color}
          {...rest}
        />
      }
      label={label}
      labelPlacement="end"
    />
  );
};

export default CustomSwitch;
