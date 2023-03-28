import configuration from "../../Configuration/keys";

const Footer = ((props) => {
  const { theme } = props;
  const { colors } = theme;

  return (
    <footer
      style={{
        padding: 18,
        backgroundColor: colors.all.white
      }}
    >
      <div
        style={{
          color: colors.all.black,
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
          fontSize: 16,
          justifyContent: "space-between"
        }}
      >
        <div style={{ flexWrap: "nowrap" }}>
          <strong>
            {"Copyright © 2023"}
            <a
              href={configuration.reactLink}
              style={{ textDecoration: "none", color: colors.all.blue }}
            >
              {"Mohammad Ghareb"}
            </a>
          </strong>
          { "All Rights Reserved"}
        </div>
        <em>{`Version ${configuration.version}`}</em>
      </div>
    </footer>
  );
});
export default Footer;
