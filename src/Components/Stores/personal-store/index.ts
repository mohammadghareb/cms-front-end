import { memoize } from "lodash";
import { observable } from "mobx";

import { TAdmin } from "../../../Types";

 
class PersonalStore {
  user = observable.box<TAdmin>({
    id: 0,
    username: "",
    fullName: "",
    role: "",
    lastLogin: "",
    accessToken: "",
  });
  userPofilePic = observable.box<string>("avatar");

 
}
const getPersonalStore = memoize(
  () => new PersonalStore(),
  () => 1
);
export default getPersonalStore;
