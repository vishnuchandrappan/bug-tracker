const PrimaryCard = ({ name, description, routeToView }) => {
  return (
    <div className="primary-card" onClick={routeToView}>
      <span className="primary-card--title">{name}</span>
      <span className="primary-card--desc">{description}</span>
    </div>
  );
};

export default PrimaryCard;
