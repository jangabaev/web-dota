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

export const Chart = () => {
  const data = [
    { name: 5, lightForce: 0.5038, darkForce: 0.4977 },
    { name: 10, lightForce: 0.4925, darkForce: 0.4846 },
    { name: 15, lightForce: 0.4954, darkForce: 0.4887 },
    { name: 20, lightForce: 0.4998, darkForce: 0.5019 },
    { name: 25, lightForce: 0.5104, darkForce: 0.5052 },
    { name: 30, lightForce: 0.5026, darkForce: 0.5049 },
    { name: 35, lightForce: 0.5003, darkForce: 0.4971 },
    { name: 40, lightForce: 0.4971, darkForce: 0.4937 },
  ];
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
        <YAxis domain={[0.48, 0.52]} stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="lightForce"
          stroke="#4CAF50"
          strokeWidth={2}
          dot={{ r: 5, fill: "#4CAF50" }}
          name="Силы Света"
        >
          <LabelList
            dataKey="lightForce"
            position="top"
            fill="#ccc"
            fontSize={10}
          />
        </Line>
        <Line
          type="linear"
          dataKey="darkForce"
          stroke="#FF0000"
          strokeWidth={2}
          dot={{ r: 5, fill: "#FF0000" }}
          name="Силы Тьмы"
        >
          <LabelList
            dataKey="darkForce"
            position="top"
            fill="#ccc"
            fontSize={10}
          />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
};
