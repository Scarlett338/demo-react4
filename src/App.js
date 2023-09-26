import "./App.css";
import Meals from "./component/Meals";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      <Meals title={"Count the number of meals."} />
    </div>
  );
}

export default App;
