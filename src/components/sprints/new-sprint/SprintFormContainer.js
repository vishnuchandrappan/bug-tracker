import React, { useContext } from "react";
import SprintForm from "./SprintForm";
import { object, string } from "yup";
import { useFirestore } from "reactfire";
import { v4 as uuid } from "uuid";
import { firestore } from "firebase";
import { ProjectContext } from "../../project-view/ProjectViewContainer";

const SprintFormContainer = (props) => {
  const projectData = useContext(ProjectContext);

  /** FireStore Collection */
  const fireStore = useFirestore().collection("sprints");

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
      project_id: projectData.id,
      created_at: firestore.Timestamp.now().toDate(),
      passed_qa: false,
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

  return <SprintForm {...props} {...formikProps} />;
};

export default SprintFormContainer;
