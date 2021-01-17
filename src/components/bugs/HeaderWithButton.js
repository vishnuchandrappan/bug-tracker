import { Button } from "@material-ui/core";
import { Plus } from "react-feather";

export const HeaderWithButton = ({ title, btnText = "New", handleClick, description = null }) => {
  return (
    <div className="page-heading">
      <span className="heading--title">{title}</span>
      {description && (<span class="heading--description">{description}</span>)}
      <div className="actions">
        <Button
          onClick={handleClick}
          color="secondary"
          className="actions-btn"
          variant="contained"
        >
          <Plus />
          {btnText}
        </Button>
      </div>
    </div>
  );
};