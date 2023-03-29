import { withObserverAndTheme } from "../../Helpers/strengthen-render";
import getLoginStore from "../../Components/Stores/login-store";

const SignInButton = withObserverAndTheme(() => {
  const store = getLoginStore();
  const disabledButton =
    !store.signInLoading.get() && !store.getIsCredentialsExist.get();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <button
        disabled={disabledButton}
        className="clickable"
        style={{
          borderRadius: 10,
          padding: "8px 24px",
          border: "none"
        }}
        onClick={() => getLoginStore().signIn()}
      >
        {"Sign In"}
      </button>
    </div>
  );
});
export default SignInButton;
