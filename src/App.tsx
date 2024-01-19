import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Waterfall from "./pages/Waterfall";
import Bargraph from "./pages/Bargraph";

function App() {
  return (
    <Router>
      <div className="relative flex flex-row gap-8 bg-gray-950 p-2 text-white">
        <Link
          to="/"
          className="rounded-md border-2 border-white px-2 py-1 text-center"
        >
          Home
        </Link>
        <Link
          to="/bargraph"
          className="rounded-md border-2 border-white px-2 py-1 text-center"
        >
          Bargraph
        </Link>
      </div>

      <Routes>
        <Route path="/bargraph" element={<Bargraph />} />
        <Route path="/" element={<Waterfall />} />
      </Routes>
    </Router>
  );
}

export default App;
