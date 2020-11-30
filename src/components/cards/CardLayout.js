import { MapData } from "../facades/MapData";
import { NewItemContainer } from "../new-item/NewItemContainer";
import PrimaryCardContainer from "./PrimaryCardContainer";

export const CardLayout = ({ title, NewDataComponent, ...rest }) => {
  return (
    <div className="primary-card-container container">
      <h1 className="page-heading primary-card-heading">{title}</h1>
      <div className="primary-card-content">
        <MapData
          {...rest}
          title={`${title}s`}
          Component={PrimaryCardContainer}
        />
        <NewItemContainer title={title} Component={NewDataComponent} />
      </div>
    </div>
  );
};

export default CardLayout;
