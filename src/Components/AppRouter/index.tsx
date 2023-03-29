import {
     Routes,
    Route,
   } from "react-router-dom";
  
 
import Login from "../../Routes/Login";
 
import getPersonalStore from "../Stores/personal-store";

const AppRouter = (() => {
  const adminId =getPersonalStore().user.get().id;
  return adminId === 0 ? null : (
     <Routes>
      <Route path="/"  element={<Login/>} />
    </Routes>
    );
});
export default AppRouter;
