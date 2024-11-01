export const Table = ({
  team1,
  team2,
}: {
  team1: {
    win: number;
    point: number;
    effect: number;
  };
  team2: {
    win: number;
    point: number;
    effect: number;
  };
}) => {
  return (
    <table className="text-sm w-full text-textColor opacity-70">
      <thead>
        <tr className="border-none">
          <th className="py-1"></th>
          <th className="py-1">Процент побед</th>
          <th className="py-1">Очки</th>
          <th className="py-1">Эффективность</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-none">
          <td className="font-medium">Силы Света</td>
          <td className="text-center">{team1.win}%</td>
          <td className="text-center">{team1.point}</td>
          <td className="text-center">{team1.effect}</td>
        </tr>
        <tr className="border-none">
          <td className="font-medium">Силы Тьмы</td>
          <td className="text-center">{team2.win}%</td>
          <td className="text-center">{team2.point}</td>
          <td className="text-center">{team2.effect}</td>
        </tr>
      </tbody>
    </table>
  );
};
