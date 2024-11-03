import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export const Chart = ({
  teamRadiant,
  teamDire,
  team,
  team2,
}: {
  teamRadiant: string;
  teamDire: string;
  team: number[];
  team2: number[];
}) => {
  const [data, setData] = useState<
    { name: number; lightForce: number; darkForce: number }[]
  >([]);

  useEffect(() => {
    if (team && team2) {
      let newData = [];
      for (let i = 0; i < team.length; i++) {
        newData.push({
          name: (i + 1) * 5,
          lightForce: team[i],
          darkForce: team2[i],
        });
      }
      setData(newData);
    }
  }, [team, team2]);
  return (
    <ResponsiveContainer
      width="100%"
      className="translate-x-[-15px]"
      height={400}
    >
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#333" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis domain={[0.47, 0.53]} stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="darkForce"
          stroke="#4CAF50"
          strokeWidth={2}
          dot={{ r: 5, fill: "#4CAF50" }}
          name={teamRadiant}
        >
          <LabelList
            dataKey="darkForce"
            position="top"
            fill="#ccc"
            fontSize={10}
          />
        </Line>
        <Line
          type="linear"
          dataKey="lightForce"
          stroke="#FF0000"
          strokeWidth={2}
          dot={{ r: 5, fill: "#FF0000" }}
          name={teamDire}
        >
          <LabelList
            dataKey="lightForce"
            position="top"
            fill="#ccc"
            fontSize={10}
          />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
};
