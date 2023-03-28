import { memoize } from "lodash";
import { observable } from "mobx";

class UIStore {
 
  isHeaderVisible = observable.box<boolean>(false);
  isSideBarVisible = observable.box<boolean>(false);
  isProfileDropdownVisible = observable.box<boolean>(false);

  toggleProfileDropdown = () => {
    const status = this.isProfileDropdownVisible.get();
    this.isProfileDropdownVisible.set(!status);
  };
 
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
