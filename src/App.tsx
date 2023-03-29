 
import { Router } from "react-router-dom";

import configuration from "../src/Configuration/keys/index";
import AppRouter from "./Components/AppRouter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
 
import UnderConstruction from "./Components/UnderConstruction";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import getHistoryStore from "./Components/Stores/history-store";

 
const App = (() => {
  if (configuration.IS_UNDER_CONSTRUCTION) {
    return <UnderConstruction></UnderConstruction>;
  }

  const history = createBrowserHistory();
  getHistoryStore().history.set(history);
  getHistoryStore().startApp();
  // useEffect(() => {
  //   getHistoryStore().history.set(history);
  // //  getRootStore().startApp();
 
  // }, [history]);

  return (

    <div style={{ flex: 1, height: "100vh" }}>
 
      <Router basename="" location={""} navigator={history}>
        <Header />
     
        <div
          style={{
            display: "flex",
            flex: 1,
            minHeight: "100%",
            minWidth: "100%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1
            }}
          >
            <div style={{ flex: 1 }}>
       
              <AppRouter />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
});
export default App;
