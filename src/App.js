import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Heading/>
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
