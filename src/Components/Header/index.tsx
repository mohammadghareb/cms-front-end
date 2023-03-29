
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getPersonalStore from "../Stores/personal-store";
import getUIStore from "../Stores/ui-store";
import { withObserverAndTheme } from "../../Helpers/strengthen-render";
 
const Header = withObserverAndTheme((props) => {
  const { theme } = props;
  const { colors } = theme;
  const isVisible = getUIStore().isHeaderVisible.get();
  const user = getPersonalStore().user.get();
  const name = user.username;
  const userImageName = getPersonalStore().userPofilePic.get()
  return isVisible ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor:  colors.all.blue,
        justifyContent: "space-between",
        alignItems: "center",

        height: "7%"
      }}
    >
      <FontAwesomeIcon
        className="clickable"
        onClick={() => getUIStore().toggleSideBar()}
        icon={faBars}
        color={colors.all.white}
        style={{ padding: "16px 12px" }}
        size="1x"
      />
      <a
        href="/"
        style={{
          alignSelf: "center",
          textDecoration: "none",
          fontSize: 20,
          fontWeight: "bold",
          color: colors.all.white
        }}
      >
        {"CMS"}
      </a>
      <div
        className="clickable"
        onClick={() => getUIStore().toggleProfileDropdown()}
        style={{
          color: colors.all.white,
          padding: "0 6px",
          backgroundColor: colors.all.blue,
          display: "flex",
          alignItems: "center",
          alignSelf: "stretch"
        }}
      >
        <img
          src={require(`../../Assets/Images/${userImageName}.png`).default}
          alt={"ADMIN"}
          style={{
            height: 45,
            width: 45,
            borderRadius: 50,
            background: colors.all.white,
            marginRight:2
          }}
        />
        {name}
      </div>
    </div>
  ) : null;
});
export default Header;
