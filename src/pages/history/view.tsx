import { useNavigate } from "react-router-dom";
import { GeroysImg } from "../../components/geroys-img";
import { Button } from "../../components/ui/button";
import { Table } from "../../components/table/table";
import { Chart } from "../../components/chart";

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
        <Chart />
      </div>

      <div className="px-2">
        <Table
          team1={{ win: 47.9, point: 11, effect: 88.9 }}
          team2={{ win: 52.1, point: 10, effect: 89 }}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button onClick={() => navigate(-1)}>назад</Button>
      </div>
    </section>
  );
};
