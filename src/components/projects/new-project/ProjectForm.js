import { FormControlLabel, Switch } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Plus, X } from "react-feather";
import { SubmitButton } from "../../buttons/SubmitButton";
import CustomField from "../../form/CustomField";

const ProjectForm = ({
  show,
  hideForm,
  initialValues,
  validationSchema,
  handleSubmit,
  handleToggle,
  toggle,
}) => {
  return show ? (
    <>
      <div className="close-btn">
        <X size={48} onClick={hideForm} />
      </div>
      <div className="project-form">
        <h1 className="page-heading">Create New Project</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ submitForm, isSubmitting, setFieldValue }) => (
            <Form className="form">
              <Field component={CustomField} name="name" label="XYZ Project" />

              <Field
                component={CustomField}
                name="description"
                label="Something about the project..."
                multiline
                rows={4}
              />

              <FormControlLabel
                control={
                  <Field
                    name="type"
                    component={Switch}
                    onChange={() => {
                      handleToggle();
                      setFieldValue("type", !toggle);
                    }}
                    checked={toggle}
                  />
                }
                label="Make this project sprint based ?"
              />

              <div className="btn-container">
                <SubmitButton
                  startIcon={<Plus />}
                  size="large"
                  color="secondary"
                  isSubmitting={isSubmitting}
                  onClick={submitForm}
                >
                  Create
                </SubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  ) : (
    ""
  );
};

export default ProjectForm;
