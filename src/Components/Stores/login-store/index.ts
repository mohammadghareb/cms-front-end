 
import { memoize } from "lodash";
import { observable,computed } from "mobx";
  
import {apiCallSignIn} from "../../../api/login-api"
class LoginStore {
  username = observable.box<string>("");
  password = observable.box<string>("");
  isErrorVisible = observable.box<boolean>(false);
  errorKey = observable.box<string>("EMPTY_STRING");
  signInLoading = observable.box<boolean>(false);

  getIsCredentialsExist = computed(() => {
    const definedUserName =this.username.get();
    const definedPassword = this.password.get();

    return definedUserName && definedPassword;
  });
  setSignInLoading = (isLoading: boolean) => {
    this.signInLoading.set(isLoading);
  };
  signIn = async () => {
   
    const username = this.username.get();
    const password = this.password.get();

    const { data, status } = await apiCallSignIn({ username, password });

//     if (status === "OK") {
//       // later
//     } else if (status === "ERROR") {
//       //later
//     }
  }
   
}
const getLoginStore = memoize(
  () => new LoginStore(),
  () => 1
);
export default getLoginStore;
