import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import Sidebar from "./components/Home/Sidebar";
import Heading from "./components/Home/Heading";
import ExchangeCalc from "./components/Calc/ExchangeCalc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriceTable from "./components/Calc/PriceTable";
import Charts from "./components/charts/Charts";

function App() {
  return (
    <>
      <Router>  
         {/* using react router v5 */}
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
