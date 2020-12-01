import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import { object, string } from "yup";
import { useFirestore } from "reactfire";
import { v4 as uuid } from "uuid";
import { firestore } from "firebase";

const ProjectFormContainer = (props) => {
  /** FireStore Collection */
  const fireStore = useFirestore().collection("projects");

  /** Material Switch */
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };


  /** Formik Inits */
  const initialValues = {
    name: "",
    description: "",
    type: toggle,
  };

  const validationSchema = object().shape({
    name: string().required(),
    description: string().required(),
  });

  const handleSubmit = async ({type, ...values}, { setSubmitting, resetForm }) => {

    await fireStore.add({
      id: uuid(),
      ...values,
      type: type ? 'sprint' : 'bugs',
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
    toggle,
    handleToggle,
  };

  return <ProjectForm {...props} {...formikProps} />;
};

export default ProjectFormContainer;
