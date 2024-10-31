import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Navbar } from "../components/layouts/navbar";
import { store } from "./store";
import { Analysis } from "../pages/analysis";
import { Dashboard } from "../pages/dashboard";
import { History, HistoryView } from "../pages/history";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/history" element={<History />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:id" element={<HistoryView />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
