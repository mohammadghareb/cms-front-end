import React from "react";

import { withObserverAndTheme } from "../../Helpers/strengthen-render";
import Margin from "../../Helpers/ui-components/Margin";
import getHistoryStore from "../../Components/Stores/history-store";
import ReactLink from "./ReactLink";
import SignInError from "./IncorrectPasswordAlert";
import PasswordFormItem from "./PasswordFormItem";
import SignInButton from "./SignInButton";
import UsernameFormItem from "./UsernameFormItem";
import Welcome from "./Welcome";

const Login = withObserverAndTheme((props) => {
  const { theme } = props;
  const { colors } = theme;
  React.useEffect(() => {
    getHistoryStore().setPageName("LOGIN");
  }, []);
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
      <ReactLink />
      <Margin top={20} />
      <UsernameFormItem />
      <Margin top={10} />
      <PasswordFormItem />
      <Margin top={10} />
      <SignInError />
      <Margin top={10} />
      <SignInButton />
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
      <Welcome />
    </div>
  );
});
export default Login;
 