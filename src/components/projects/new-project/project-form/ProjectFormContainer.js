import React from "react";
import ProjectForm from "./ProjectForm";
import { object, string } from "yup";
import { useFirestore } from "reactfire";
import { v4 as uuid } from "uuid";
import { firestore } from "firebase";

const ProjectFormContainer = (props) => {

  /** FireStore Collection */
  const fireStore = useFirestore().collection("projects");

  /** Formik Inits */
  const initialValues = {
    name: "",
    description: "",
  };

  const validationSchema = object().shape({
    name: string().required(),
    description: string().required(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await fireStore.add({
      id: uuid(),
      ...values,
      created_at: firestore.Timestamp.now().toDate(),
    });

    setSubmitting(false);
    resetForm();
    props.hideForm();
  };

  const formikProps = {
    initialValues,
    validationSchema,
    handleSubmit,
  };

  return <ProjectForm {...props} {...formikProps} />;
};

export default ProjectFormContainer;
