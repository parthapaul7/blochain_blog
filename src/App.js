import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";
import ExchangeCalc from "./components/ExchangeCalc";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading/>
      {/* <div className="flex">
        <Sidebar />
        <Home />
      </div> */}
      <ExchangeCalc/>
    </div>
  );
}

export default App;
