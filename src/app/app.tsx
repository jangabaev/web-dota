import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/layouts/navbar";
import { Analysis } from "../pages/analysis";
import { Dashboard } from "../pages/dashboard";
import { History, HistoryView } from "../pages/history";

type ValueType = boolean;
interface ITeam {
  id: number;
  name: string;
  photo: string;
}

interface GameStatistics {
  radiant_winrate: number;
  dire_winrate: number;
  radiant_counter: number;
  dire_counter: number;
  radiant_chart: number[];
  dire_chart: number[];
  radiant_efficiency: number;
  dire_efficiency: number;
  message: string;
  usages_remaining: number;
}

interface ValueContextType {
  analiz: ValueType;
  setAnaliz: (newValue: ValueType) => void;
  team: ITeam[];
  setTeam: React.Dispatch<React.SetStateAction<ITeam[]>>;
  team2: ITeam[];
  setTeam2: React.Dispatch<React.SetStateAction<ITeam[]>>;
  rezult: GameStatistics | undefined;
  setRezult: React.Dispatch<React.SetStateAction<GameStatistics | undefined>>;
}

const ValueContext = createContext<ValueContextType | undefined>(undefined);

export const ValueProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [analiz, setAnaliz] = useState<ValueType>(false);
  const [team, setTeam] = useState<ITeam[]>([]);
  const [team2, setTeam2] = useState<ITeam[]>([]);
  const [rezult, setRezult] = useState<GameStatistics>();

  return (
    <ValueContext.Provider
      value={{
        analiz,
        setAnaliz,
        team,
        team2,
        setTeam,
        setTeam2,
        rezult,
        setRezult,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Инициализация WebApp
      const webApp = window.Telegram.WebApp;

      // Устанавливаем веб-приложение в полноэкранный режим
      webApp.expand();

      // Дополнительно можно вызвать show() для отображения интерфейса
      webApp.show();
    }
  }, []);

  return (
    <ValueProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:historyId" element={<HistoryView />} />
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
