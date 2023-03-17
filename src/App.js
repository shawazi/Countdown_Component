import Timer from "./components/Timer"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Countdown Timer Component</h1>
      <Timer initial={50}/>
    </div>
  );
}

export default App;
