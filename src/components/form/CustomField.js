import { TextField } from "formik-material-ui";

const CustomField = ({ type = "text", ...rest }) => {
  return (
    <TextField
      variant="filled"
      className="custom-field"
      type={type}
      {...rest}
    />
  );
};

export default CustomField;
