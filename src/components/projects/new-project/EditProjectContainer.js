import React, { useContext, useState } from "react";
import ProjectForm from "./ProjectForm";
import { object, string } from "yup";
import { useFirestore } from "reactfire";
import { firestore } from "firebase";
import { ProjectContext } from "../../project-view/ProjectViewContainer";

const EditProjectContainer = (props) => {
  const {
    id,
    data: { name, description, type },
  } = useContext(ProjectContext);

  /** FireStore Collection */
  const fireStore = useFirestore().collection("projects").where("id", "==", id);

  /** Material Switch */
  const [toggle, setToggle] = useState(type === "sprint");
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  /** Formik Inits */
  const initialValues = {
    name,
    description,
    type,
  };

  const validationSchema = object().shape({
    name: string().required(),
    description: string().required(),
  });

  const handleSubmit = async (
    { type, ...values },
    { setSubmitting, resetForm }
  ) => {
    await fireStore.set({
      id,
      ...values,
      type: type ? "sprint" : "bugs",
      updated_at: firestore.Timestamp.now().toDate(),
    });

    setSubmitting(false);
    resetForm();
    props.hideForm();
  };

  const formikProps = {
    initialValues,
    validationSchema,
    handleSubmit,
    toggle,
    handleToggle,
  };

  return <ProjectForm {...props} {...formikProps} />;
};

export default EditProjectContainer;
