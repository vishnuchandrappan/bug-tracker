export const MapData = ({ title = null, data, Component, ...rest }) => {
  return (
    <>
      {data.map((item) => (
        <Component
          {...item}
          {...rest}
          key={item.id}
          target={title !== null ? `/${title.toLowerCase()}/${item.id}` : ""}
        />
      ))}
    </>
  );
};
