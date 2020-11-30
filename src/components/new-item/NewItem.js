import { PlusCircle } from "react-feather";

export const NewItem = ({
  show,
  showForm,
  hideForm,
  Component,
  title,
  ...rest
}) => {
  return (
    <>
      <div className="primary-card" onClick={showForm}>
        <span className="primary-card--title">Create New {title}</span>
        <div className="primary-card--desc">
          <PlusCircle size={48} />
        </div>
      </div>
      <Component show={show} hideForm={hideForm} {...rest} />
    </>
  );
};
