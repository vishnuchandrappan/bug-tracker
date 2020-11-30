import { Field, Form, Formik } from "formik";
import React from "react";
import { Plus, X } from "react-feather";
import { SubmitButton } from "../../buttons/SubmitButton";
import CustomField from "../../form/CustomField";

const SprintForm = ({
  show,
  hideForm,
  initialValues,
  validationSchema,
  handleSubmit,
}) => {
  return show ? (
    <>
      <div className="close-btn">
        <X size={48} onClick={hideForm} />
      </div>
      <div className="sprint-form">
        <h1 className="page-heading">Create New Sprint</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className="form">
              <Field component={CustomField} name="name" label="XYZ Sprint" />

              <Field
                component={CustomField}
                name="description"
                label="Something about the sprint..."
                multiline
                rows={4}
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

export default SprintForm;
