import { useNavigate } from "react-router-dom";
import { GeroysImg } from "../../components/geroys-img";
import { Button } from "../../components/ui/button";
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

const geroys = [
  {
    id: 105,
    name: "Vengeful Spirit",
    photo: "heroIcons/vengeful_spirit.png",
  },
  { id: 95, name: "Viper", photo: "heroIcons/viper.png" },
  { id: 122, name: "Visage", photo: "heroIcons/visage.png" },
  { id: 18, name: "Warlock", photo: "heroIcons/warlock.png" },
  { id: 30, name: "Weaver", photo: "heroIcons/weaver.png" },
];

type DataPoint = {
  name: number;
  lightForce: number;
  darkForce: number;
};

const data: DataPoint[] = [
  { name: 5, lightForce: 0.5038, darkForce: 0.4977 },
  { name: 10, lightForce: 0.4925, darkForce: 0.4846 },
  { name: 15, lightForce: 0.4954, darkForce: 0.4887 },
  { name: 20, lightForce: 0.4998, darkForce: 0.5019 },
  { name: 25, lightForce: 0.5104, darkForce: 0.5052 },
  { name: 30, lightForce: 0.5026, darkForce: 0.5049 },
  { name: 35, lightForce: 0.5003, darkForce: 0.4971 },
  { name: 40, lightForce: 0.4971, darkForce: 0.4937 },
];

export const HistoryView = () => {
  const navigate = useNavigate();
  return (
    <section className="py-2 pb-[100px]">
      <div>
        <p className="text-green-600 mb-1 pl-4 shadow-md text-lg font-bold">
          Силы Света
        </p>
        <GeroysImg data={geroys} />
      </div>
      <div>
        <p className="text-red-600 text-end mt-4 mb-1 pr-4 text-lg font-bold">
          Силы Света
        </p>
        <GeroysImg data={geroys} />
      </div>
      <h3 className="text-lg text-center text-textColor opacity-80 mt-3">
        Преимущество команд в минуту игры
      </h3>
      <div className="flex items-center">
        <p className="vertical-text textVertical text-textColor opacity-70">
          Преимущ ущество
        </p>
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
      </div>

      <div className="px-2">
        <table className="text-sm w-full text-textColor opacity-70">
          <thead>
            <tr className="border-zinc-800">
              <th className="py-1"></th>
              <th className="py-1">Процент побед</th>
              <th className="py-1">Очки</th>
              <th className="py-1">Эффективность</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-none">
              <td className="font-medium">Силы Света</td>
              <td className="text-center">51.35%</td>
              <td className="text-center">11.0</td>
              <td className="text-center">88.8</td>
            </tr>
            <tr className="border-zinc-800">
              <td className="font-medium">Силы Тьмы</td>
              <td className="text-center">49.61%</td>
              <td className="text-center">10.0</td>
              <td className="text-center">75.4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <Button onClick={() => navigate(-1)}>назад</Button>
      </div>
    </section>
  );
};
