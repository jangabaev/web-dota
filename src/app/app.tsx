import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/layouts/navbar";
import { Analysis } from "../pages/analysis";
import { Dashboard } from "../pages/dashboard";
import { History, HistoryView } from "../pages/history";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<HistoryView />} />
      </Routes>
    </Router>
  );
}

export default App;
