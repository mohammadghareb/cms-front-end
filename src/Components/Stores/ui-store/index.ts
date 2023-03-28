import { memoize } from "lodash";
import { observable } from "mobx";

class UIStore {
 
  isHeaderVisible = observable.box<boolean>(false);
  isSideBarVisible = observable.box<boolean>(false);
 
 
  toggleSideBar = () => {
    const status = this.isSideBarVisible.get();
    this.setSideBarVisisble(!status);
  };
  setSideBarVisisble = (sideBarVisible: boolean) => {
    this.isSideBarVisible.set(sideBarVisible);
  };

   
}

const getUIStore = memoize(
  () => new UIStore(),
  () => 1
);
export default getUIStore;
