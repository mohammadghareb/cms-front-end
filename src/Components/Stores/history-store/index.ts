import { History } from "history";
import { memoize } from "lodash";
import { observable,configure } from "mobx";
import { TPage } from "../../../Types";

import getHistoryStore from "../history-store";
import getUIStore from "../ui-store"
import getPersonalStore from "../personal-store"
class CoreHistoryStore {
  history = observable.box<History>();
  pageName = observable.box<TPage>("");
  setPageName = (page: TPage) => {
    this.pageName.set(page);
  };
  setMobxConfig = () => {

    configure({
      enforceActions: "never"
    });
  };
  // navigateReplaceCurrent = (targetScreen: string, state?: Object) => {
  //   this.history.get().replace(targetScreen, state);
  // };


  startApp = async () => {
    this.setMobxConfig();
    const userFromStorage = localStorage.getItem("user");
    if ((userFromStorage)) {
      getUIStore().isHeaderVisible.set(true);
      getUIStore().isSideBarVisible.set(true);
      return true;
    } else {
      getPersonalStore().user.set({
        id: -1,
        username: "",
        fullName: "",
        role: "",
        lastLogin: "",
        accessToken: "",
      });

      // getHistoryStore().navigateReplaceCurrent("/");
      return false;
    }
  };

}
const getCoreHistoryStore = memoize(
  () => new CoreHistoryStore(),
  () => 1
);
export default getCoreHistoryStore;
