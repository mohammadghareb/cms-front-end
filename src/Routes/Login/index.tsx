import React from "react";

import { withObserverAndTheme } from "../../Helpers/strengthen-render";


const Login = withObserverAndTheme((props) => {
  const { theme } = props;
  const { colors } = theme;

  const showLoginPage = localStorage.getItem("user") === null;

  return showLoginPage ? (
    <div
      style={{
        backgroundColor: colors.all.darkGray,
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
   
    </div>
  ) : (
    <div
      style={{
        backgroundColor: colors.all.white,
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
    </div>
  );
});
export default Login;
 