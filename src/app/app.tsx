import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/layouts/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>kfekfmwkfm</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
