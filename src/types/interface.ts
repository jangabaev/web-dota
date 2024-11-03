interface MatchData {
  id: number;
  analysis: {
    team1: {
      id: number;
      name: string;
      photo: string;
    }[];
    team2: {
      id: number;
      name: string;
      photo: string;
    }[];
  };
  teamRadiant: string;
  teamDire: string;
  date: string;
}

export type MatchHistory = MatchData[];

interface AnalysisResult {
  radiant_winrate: number;
  dire_winrate: number;
  radiant_counter: number;
  dire_counter: number;
  radiant_chart: number[];
  dire_chart: number[];
  radiant_efficiency: number;
  dire_efficiency: number;
}

export interface GameData {
  radiantHeroesHistory: number[];
  direHeroesHistory: number[];
  timestamp: number;
  analysisResult: AnalysisResult;
  teamDire: string;
  teamRadiant: string;
}

interface Hero {
  id: number;
  name: string;
  photo: string;
}

interface Analysis {
  team1: Hero[];
  team2: Hero[];
}

export interface RezultOneGame {
  id: number;
  analysis: Analysis;
  analysisResult: AnalysisResult;
}
