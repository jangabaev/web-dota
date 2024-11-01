// import { useEffect, useState } from "react";
// import CryptoJS from "crypto-js";
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
  // const [rezults, setRezult] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (true) {
  //     if (window.Telegram) {
  //       window.Telegram.WebApp.ready();
  //       const encryptedUserId = CryptoJS.AES.encrypt(
  //         String(window.Telegram.WebApp.initDataUnsafe.user.id),
  //         "arman"
  //       ).toString();

  //       const fetchData = async () => {
  //         try {
  //           const response = await fetch(
  //             "https://jsonplaceholder.typicode.com/posts",
  //             {
  //               method: "GET",
  //               headers: {
  //                 Authorization: `Bearer ${encryptedUserId}`,
  //                 "Content-Type": "application/json",
  //               },
  //             }
  //           );
  //           const result = await response.json();
  //           setRezult(result);
  //         } catch (error) {
  //           console.error("Error fetching data:", error);
  //         } finally {
  //           setLoading(false);
  //         }
  //       };
  //       fetchData();
  //     }
  //   } else {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/posts",
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const result = await response.json();
  //         setRezult(result);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, []);
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
        <Chart
          team={[
            0.4908, 0.4976, 0.492, 0.4932, 0.5072, 0.5113, 0.5044, 0.4971,
            0.4998,
          ]}
          team2={[
            0.4972, 0.4722, 0.4823, 0.4912, 0.4851, 0.4952, 0.5169, 0.5183,
            0.5117,
          ]}
        />
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
