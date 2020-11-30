import React from "react";

export const Loading = () => {
  return (
    <div className="full-page">
      <Loader />
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
