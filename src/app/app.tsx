import React, { createContext, useContext, useState, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/layouts/navbar";
import { Analysis } from "../pages/analysis";
import { Dashboard } from "../pages/dashboard";
import { History, HistoryView } from "../pages/history";

type ValueType = false;

interface ValueContextType {
  value: ValueType;
  setValue: (newValue: ValueType) => void;
}

const ValueContext = createContext<ValueContextType | undefined>(undefined);

export const ValueProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [analiz, setAnaliz] = useState<ValueType>(false);

  return (
    <ValueContext.Provider value={{ analiz, setAnaliz }}>
      {children}
    </ValueContext.Provider>
  );
};

function App() {
  return (
    <ValueProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:id" element={<HistoryView />} />
        </Routes>
      </Router>
    </ValueProvider>
  );
}
export const useValueContext = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error("useValueContext must be used within a ValueProvider");
  }
  return context;
};

export default App;
