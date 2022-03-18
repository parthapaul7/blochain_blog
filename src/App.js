import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";
import ExchangeCalc from "./components/ExchangeCalc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriceTable from "./components/PriceTable";
import Charts from "./components/Charts";
import "./hosting/firebase.js"
function App() {
  return (
    <>
      <Router>
        <NavBar />  
        {/*navBar present in all pages */}
        <Switch>
          <Route exact path="/">
            <Heading />
            <div className="flex">
              <Sidebar />
              <Home />
            </div>
          </Route>
          <Route path="/calc">
            <div className="h-20"></div>
            <ExchangeCalc />
            <PriceTable />
          </Route>
          <Route path="/charts">
            <div className="h-20"></div>
            <Charts/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
