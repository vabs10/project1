import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Components/First";
import Second from "./Components/Second";
import Time from "./ListGroups/Time";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<First />} />
          <Route exact path="/2" element={<Second />} />
          <Route exact path="/tm" element={<Time />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
