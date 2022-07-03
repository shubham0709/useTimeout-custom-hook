import './App.css';
import { useTimeout } from "./hooks/useTimeout";

function App() {
  let niharika = useTimeout(3000);
  let shubham = useTimeout(4000);

  return (
    <div className="App">
      "niharika" = {niharika ? "ready" : "not ready"}
      "shubham" = {shubham ? "ready" : "not ready"}
    </div>
  );
}

export default App;
