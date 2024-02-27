import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Components/First";
import Second from "./Components/Second";
import Time from "./ListGroups/Time";
import Fixed from "./ListGroups/Fixed";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<First />} />
          <Route exact path="/2" element={<Second />} />
          <Route exact path="/3" element={<Third />} />
          <Route exact path="/4" element={<Fourth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
