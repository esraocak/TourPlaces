import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/NavBar";
import data from "./helper/data"
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className="card-container">
    {data.map((item) => <Main item={item}/>)}
      </div>
    </div>
  );
}

export default App;
