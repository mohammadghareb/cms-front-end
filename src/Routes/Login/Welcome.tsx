import React from "react";

import { withObserverAndTheme } from "../../Helpers/strengthen-render";
import getPersonalStore from "../../Components/Stores/personal-store";

const Welcome = withObserverAndTheme((props) => {
  const { theme } = props;
  const { colors } = theme;
 

  const name = `Welcome : ${
    getPersonalStore().user.get().fullName
  }`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <p
        id="welcome"
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: 42,
          color: colors.all.blue
        }}
      >
        {`${name}`}
      </p>
    </div>
  );
});
export default Welcome;
