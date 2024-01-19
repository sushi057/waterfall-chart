import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Waterfall from "./pages/Waterfall";
import Bargraph from "./pages/Bargraph";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/bargraph">Bargraph</Link>
      </div>

      <Routes>
        <Route path="/bargraph" element={<Bargraph />} />
        <Route path="/" element={<Waterfall />} />
      </Routes>
    </Router>
  );
}

export default App;
