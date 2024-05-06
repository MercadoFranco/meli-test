import "./styles.sass";

const Breadcrumb = ({ data }) => {
  return (
    <p className="breadcrumb">
      {data.map((segment, index) => (
        <span key={segment}>
          {segment}
          {index !== data.length - 1 ? " > " : ""}
        </span>
      ))}
    </p>
  );
};

export default Breadcrumb;
