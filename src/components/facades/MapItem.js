export const MapItem = ({ data, Component }) => {
  return (
    <>
      {data.map((item) => (
        <Component item={item} />
      ))}
    </>
  );
};
