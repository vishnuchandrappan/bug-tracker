import { BackButton } from "../buttons/BackButton";

export const NotFound = () => {
  return (
    <>
      <BackButton />
      <div className="not-found">
        <h2>404</h2>
        <h5>Not Found</h5>
      </div>
    </>
  );
};

export default NotFound;
