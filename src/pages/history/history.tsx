import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MatchHistory } from "../../types/interface";

const loadingData = [1, 2, 3, 4];
import data from "../../../data.json";

export const History = () => {
  const [rezults, setRezult] = useState<MatchHistory>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (window.Telegram) {
      window.Telegram.WebApp.ready();

      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://appapi.dotadiviner.ru/v2/tgminiapp_get_history",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: window.Telegram.WebApp.initData,
              }),
            }
          );
          const result = await response.json();

          if (result?.history?.length > 0) {
            let newData: any[] = [];
            for (let i = 0; i < result.history.length; i++) {
              const team1 = result.history[i].radiantHeroesHistory
                ?.map((id: any) => data.data.find((hero) => hero.id === id))
                .filter(Boolean);

              const team2 = result.history[i].direHeroesHistory
                ?.map((id: any) => data?.data?.find((hero) => hero.id === id))
                .filter(Boolean);

              const date = (
                result.history[i].timestamp
                  ? new Date(result.history[i].timestamp * 1000)
                  : new Date()
              ).toLocaleString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });

              newData.unshift({
                id: result.history[i].id,
                analysis: {
                  team1,
                  team2,
                },
                date,
                teamRadiant: result.history[i].teamRadiant,
                teamDire: result.history[i].teamDire,
              });
            }
            setRezult(newData);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, []);

  if (loading) {
    return (
      <div className="px-5 py-2 pb-[120px]">
        {loadingData.map((el) => (
          <div className="mb-2 border border-black p-2 rounded-md" key={el}>
            <div className="flex gap-4">
              <div className="flex justify-start">
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
              </div>
              <p className="text-green-600">Силы Света</p>
            </div>
            <div className="flex gap-4 mt-4">
              <p className="text-red-600">Силы Тьмы</p>
              <div className="flex justify-start">
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
                <div className="h-6 w-[42px] bg-skleton"></div>
              </div>
            </div>
            <p className="text-textColor text-center mt-1 opacity-70 h-6"></p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="px-5 py-2 pb-[200px]">
      {rezults?.length > 0 ? (
        rezults.map((el) => (
          <Link to={`/history/${el.id}`} key={el.id}>
            <div className="mb-2 border border-black p-2 rounded-md">
              <div className="flex gap-4">
                <div className="flex justify-start">
                  {el?.analysis?.team1?.map((item) => (
                    <img
                      src={`/img/${item.photo}`}
                      className="h-6"
                      key={item.id}
                    />
                  ))}
                </div>
                <p className="text-green-600">{el.teamRadiant}</p>
              </div>
              <div className="flex gap-4 mt-4">
                <p className="text-red-600">{el.teamDire}</p>
                <div className="flex justify-start">
                  {el?.analysis?.team2?.map((item) => (
                    <img
                      src={`/img/${item.photo}`}
                      className="h-6 w-[42px]"
                      key={item.id}
                    />
                  ))}
                </div>
              </div>
              <p className="text-textColor text-center mt-1 opacity-70">
                {el?.date}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-textColor">На данный момент нет истории</p>
      )}
    </section>
  );
};
