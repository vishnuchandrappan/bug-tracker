import { Button, Chip } from "@material-ui/core";
import { ArrowRight } from "react-feather";

export const SecondaryCard = (props) => {
  console.log("-=->->", props);

  const { name, description, status } = props;

  return (
    <div
      className={`secondary-card  ${
        status === "high_priority"
          ? "priority-card"
          : status === "qa_passed"
          ? "passed-card"
          : ""
      }`}
    >
      <div className="secondary-card--details">
        <span className="secondary-card--title">{name}</span>
        <span className="secondary-card--desc">{description}</span>
      </div>
      <div className="secondary-card--actions">
        <Chip
          color={status === "qa_passed" ? "primary" : "secondary"}
          label={status.replace("_", " ").toUpperCase()}
        />
        <Button
          color={status === "qa_passed" ? "primary" : "secondary"}
          variant="contained"
        >
          <ArrowRight />
          Details
        </Button>
      </div>
    </div>
  );
};
