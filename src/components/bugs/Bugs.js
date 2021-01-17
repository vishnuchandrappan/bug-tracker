import { SecondaryCard } from "../cards/SecondaryCard";
import { MapData } from "../facades/MapData";
import { HeaderWithButton } from "./HeaderWithButton";

const Bugs = ({ bugs, modifications }) => {
  return (
    <div className="container">
      <div className="bugs-container">
        <HeaderWithButton title="Bugs" handleClick={1} />
        <div className="bugs-container--contents">
          <MapData data={bugs} Component={SecondaryCard} />
        </div>
      </div>

      <div className="modifications-container">
        <HeaderWithButton title="Modifications" handleClick={1} />
        <div className="bugs-container--contents">
          <MapData data={modifications} Component={SecondaryCard} />
        </div>
      </div>
    </div>
  );
};

export default Bugs;
