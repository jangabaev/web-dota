import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GeroysImg } from "../../components/geroys-img";
import { Button } from "../../components/ui/button";
import { Table } from "../../components/table/table";
import { Chart } from "../../components/chart";
import data from "../../../data.json";
import { GameData } from "../../types/interface";

export const HistoryView = () => {
  const { id } = useParams<string>();
  const [rezults, setRezult] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    if (false) {
      if (window.Telegram) {
        window.Telegram.WebApp.ready();
        const encryptedUserId = String(
          window.Telegram.WebApp.initDataUnsafe.user.id
        );

        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://appapi.dotadiviner.ru/tgminiapp_get_history",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userid: encryptedUserId,
                }),
              }
            );
            const result = await response.json();

            if (result.history.length > 0) {
              const transformData = (originalData: GameData) => {
                if (!originalData) {
                  return null;
                }
                const team1 = originalData.radiantHeroesHistory
                  .map((id) => data.data.find((hero) => hero.id === id))
                  .filter(Boolean);

                const team2 = originalData.direHeroesHistory
                  .map((id) => data.data.find((hero) => hero.id === id))
                  .filter(Boolean);

                console.log(originalData.analysisResult);
                return {
                  id: 1,
                  analysis: {
                    team1,
                    team2,
                  },
                  analysisResult: originalData.analysisResult,
                };
              };

              const transformedData = transformData(
                result.history[parseInt(id as string) - 1] as GameData
              );
              setRezult(transformedData);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
          }
        };
        fetchData();
      }
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://appapi.dotadiviner.ru/tgminiapp_get_history",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userid: "111333",
              }),
            }
          );
          const result = await response.json();

          if (result.history.length > 0) {
            const transformData = (originalData: GameData) => {
              if (!originalData) {
                return null;
              }
              const team1 = originalData.radiantHeroesHistory
                .map((id) => data.data.find((hero) => hero.id === id))
                .filter(Boolean);

              const team2 = originalData.direHeroesHistory
                .map((id) => data.data.find((hero) => hero.id === id))
                .filter(Boolean);

              console.log(originalData.analysisResult);
              return {
                id: 1,
                analysis: {
                  team1,
                  team2,
                },
                analysisResult: originalData.analysisResult,
              };
            };

            const transformedData = transformData(
              result.history[parseInt(id as string) - 1] as GameData
            );
            setRezult(transformedData);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
        }
      };
      fetchData();
    }
  }, []);

  return (
    <section className="py-2 pb-[100px]">
      <div>
        <p className="text-green-600 mb-1 pl-4 shadow-md text-lg font-bold">
          Силы Света
        </p>
        <GeroysImg data={rezults?.analysis.team1 ?? []} />
      </div>
      <div>
        <p className="text-red-600 text-end mt-4 mb-1 pr-4 text-lg font-bold">
          Силы Света
        </p>
        <GeroysImg data={rezults?.analysis.team2 ?? []} />
      </div>
      <h3 className="text-lg text-center text-textColor opacity-80 mt-3">
        Преимущество команд в минуту игры
      </h3>
      <div className="flex items-center">
        <p className="vertical-text textVertical text-textColor opacity-70">
          Преимущ ущество
        </p>
        <Chart
          team={rezults?.analysisResult?.radiant_chart ?? []}
          team2={rezults?.analysisResult?.dire_chart ?? []}
        />
      </div>

      <div className="px-2">
        <Table
          team1={{
            win: rezults?.analysisResult?.radiant_winrate ?? 0,
            point: rezults?.analysisResult?.radiant_counter ?? 0,
            effect: rezults?.analysisResult?.radiant_efficiency ?? 0,
          }}
          team2={{
            win: rezults?.analysisResult?.dire_winrate ?? 0,
            point: rezults?.analysisResult?.dire_counter ?? 0,
            effect: rezults?.analysisResult?.dire_efficiency ?? 0,
          }}
        />
      </div>

      <div className="flex justify-center mt-4">
        <Button onClick={() => navigate(-1)}>назад</Button>
      </div>
    </section>
  );
};
