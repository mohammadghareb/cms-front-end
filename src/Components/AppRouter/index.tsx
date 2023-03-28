import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
 
import Login from "../../Routes/Login";
 
import getPersonalStore from "../Stores/personal-store";

const AppRouter = (() => {
  const adminId =getPersonalStore().user.get().id;
  return adminId === 0 ? null : (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
});
export default AppRouter;
