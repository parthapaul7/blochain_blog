import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";
import ExchangeCalc from "./components/ExchangeCalc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PriceTable from "./components/PriceTable";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Heading />
            <div className="flex">
              <Sidebar />
              <Home />
            </div>
          </Route>

          <Route path="/exchange">
           <NavBar/> 
           <div className="h-20"></div>
            <ExchangeCalc />
            <PriceTable/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
