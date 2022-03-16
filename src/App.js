import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";
import ExchangeCalc from "./components/ExchangeCalc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

          <Route path="/exhange">
           <NavBar/> 
            <Heading />
            <ExchangeCalc />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
