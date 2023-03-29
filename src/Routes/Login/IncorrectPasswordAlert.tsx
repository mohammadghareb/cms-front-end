 import { withObserverAndTheme } from "../../Helpers/strengthen-render";
import getLoginStore from "../../Components/Stores/login-store";

const SignInError = withObserverAndTheme((props) => {
  const { theme } = props;
  const { colors } = theme;
  const isVisible = getLoginStore().isErrorVisible.get();
  const error = getLoginStore().errorKey.get();

  return isVisible ? (
    <div
      style={{
        color: colors.all.red,
        textAlign: "center",
        padding: 12,
        fontWeight: "bold"
      }}
    >
      {error}
    </div>
  ) : null;
});
export default SignInError;
