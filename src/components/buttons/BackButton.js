import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";

export const BackButton = ({ target }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(target);
  };

  return (
    <div className="back-btn">
      <ArrowLeft size={48} onClick={handleClick} />
    </div>
  );
};
