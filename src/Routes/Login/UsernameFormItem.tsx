import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { withObserverAndTheme } from "../../Helpers/strengthen-render";
import getLoginStore from "../../Components/Stores/login-store";
const UsernameFormItem = withObserverAndTheme((props) => {
  const { theme } = props;
  const { colors } = theme;
  const faIcon = faUser as IconProp;
  return (
    <div
      className="input-focus"
      style={{
        backgroundColor: colors.all.white,
        borderRadius: 10,
        padding: "3px 12px",

        flexDirection: "row"
      }}
    >
      <input
        className="input-placeholder"
        placeholder={"UserName"}
        value={getLoginStore().username.get()}
        onChange={({ target }) =>
        getLoginStore().username.set(target.value)
        }
        style={{
          padding: "8px 2px",

          border: "none",
          width: "35vh"
        }}
      />
      <FontAwesomeIcon icon={faIcon} color={colors.all.darkGray} />
    </div>
  );
});
export default UsernameFormItem;
