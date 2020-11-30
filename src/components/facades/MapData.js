export const MapData = ({ data, Component }) => {
  return (
    <>
      {data.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </>
  );
};
