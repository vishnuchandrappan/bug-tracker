import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";

export const BackButton = ({ target = null }) => {
  const history = useHistory();

  const handleClick = () => {
    if (target) {
      history.push(target);
    } else {
      history.goBack();
    }
  };

  return (
    <div className="back-btn">
      <ArrowLeft size={48} onClick={handleClick} />
    </div>
  );
};
