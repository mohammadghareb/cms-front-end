import config from "../../Configuration/keys/index";

const ReactLink = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <a
        id="link"
        href={config.reactLink}
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: 42
        }}
      >
        {"React CMS"}
      </a>
    </div>
  );
};
export default ReactLink;
