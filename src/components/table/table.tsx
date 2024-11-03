export const Table = ({
  teamRadiant,
  teamDire,
  team1,
  team2,
}: {
  teamRadiant: string;
  teamDire: string;
  team1: {
    win: number;
    point: number;
    effect: number;
    synergy: number;
    counterpick: number;
  };
  team2: {
    win: number;
    point: number;
    effect: number;
    synergy: number;
    counterpick: number;
  };
}) => {
  return (
    <table className="text-sm w-full text-textColor opacity-70">
      <thead>
        <tr className="border-none text-center">
          <th className="py-1"></th>
          <td className="font-medium text-base">{teamRadiant}</td>
          <td className="font-medium text-base pr-2">{teamDire}</td>
        </tr>
      </thead>
      <tbody>
        <tr className="border-none">
          <td className="font-medium pl-4">Процент побед</td>
          <td
            className={`text-center ${
              team1.win > team2.win ? "text-winColor" : ""
            }`}
          >
            {team1.win}%
          </td>
          <td
            className={`text-center ${
              team1.win < team2.win ? "text-winColor" : ""
            } pr-2`}
          >
            {team2.win}%
          </td>
        </tr>
        <tr className="border-none">
          <td className="font-medium pl-4">Очки</td>
          <td
            className={`text-center ${
              team1.point > team2.point ? "text-winColor" : ""
            }`}
          >
            {team1.point}
          </td>
          <td
            className={`text-center ${
              team1.point < team2.point ? "text-winColor" : ""
            } pr-2`}
          >
            {team2.point}
          </td>
        </tr>
        <tr className="border-none">
          <td className="font-medium pl-4">Эффективность</td>
          <td
            className={`text-center ${
              team1.effect > team2.effect ? "text-winColor" : ""
            }`}
          >
            {team1.effect}
          </td>
          <td
            className={`text-center ${
              team1.effect < team2.effect ? "text-winColor" : ""
            } pr-2`}
          >
            {team2.effect}
          </td>
        </tr>
        <tr className="border-none">
          <td className="font-medium pl-4">Синергия</td>
          <td
            className={`text-center ${
              team1.synergy > team2.synergy ? "text-winColor" : ""
            }`}
          >
            {team1.synergy}
          </td>
          <td
            className={`text-center ${
              team1.synergy < team2.synergy ? "text-winColor" : ""
            } pr-2`}
          >
            {team2.synergy}
          </td>
        </tr>
        <tr className="border-none">
          <td className="font-medium pl-4">Контрпик</td>
          <td
            className={`text-center ${
              team1.counterpick > team2.counterpick ? "text-winColor" : ""
            }`}
          >
            {team1.counterpick}
          </td>
          <td
            className={`text-center ${
              team1.counterpick < team2.counterpick ? "text-winColor" : ""
            } pr-2`}
          >
            {team2.counterpick}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
