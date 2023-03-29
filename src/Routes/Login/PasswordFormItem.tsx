import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { withObserverAndTheme } from "../../Helpers/strengthen-render";
import getLoginStore from "../../Components/Stores/login-store";

const PasswordFormItem = withObserverAndTheme((props) => {
  const { theme } = props;
  const { colors } = theme;
  return (
    <div
      className="input-focus"
      style={{
        backgroundColor: colors.all.white,
        borderRadius: 10,
        padding: "3px 12px"
      }}
    >
      <input
        className="input-placeholder"
        placeholder={"Password"}
        type="password"
        value={getLoginStore().password.get()}
        onChange={({ target }) =>
        getLoginStore().password.set(target.value)
        }
        style={{
          padding: "8px 2px",

          border: "none",
          width: "35vh"
        }}
      />
      <FontAwesomeIcon icon={faLock} color={colors.all.darkGray} />
    </div>
  );
});
export default PasswordFormItem;
