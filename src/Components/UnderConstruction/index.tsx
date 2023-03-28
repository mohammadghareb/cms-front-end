 

const UnderConstruction = (() => {
  return (
    <div style={{ flex: 1, height: "100vh" }}>
      <img
        src={require("../Assets/Images/under-construction.png").default}
        alt={"under construction"}
        style={{
          height: "100%",
          width: "100%",
          background: "white"
        }}
      />
    </div>
  );
});
export default UnderConstruction;
