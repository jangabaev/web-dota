import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MatchHistory } from "../../types/interface";

const loadingData = [1, 2, 3, 4];
import data from "../../../data.json";

export const History = () => {
  const [rezults, setRezult] = useState<MatchHistory>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (false) {
      if (window.Telegram) {
        window.Telegram.WebApp.ready();
        const encryptedUserId = String(
          window.Telegram.WebApp.initDataUnsafe.user.id
        );

        const fetchData = async () => {
          try {
            setLoading(true);
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
              setRezult(
                result.history?.map((item: any, index: any) => {
                  const team1 = item.radiantHeroesHistory
                    ?.map((id: any) => data.data.find((hero) => hero.id === id))
                    .filter(Boolean);

                  const team2 = item.direHeroesHistory
                    ?.map((id: any) =>
                      data?.data?.find((hero) => hero.id === id)
                    )
                    .filter(Boolean);

                  const date = new Date(
                    item.timestamp ?? 0 * 1000
                  ).toLocaleString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  });

                  return {
                    id: index + 1,
                    analysis: {
                      team1,
                      team2,
                    },
                    date,
                  };
                })
              );
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }
    } else {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://appapi.dotadiviner.ru/tgminiapp_get_history",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: "123123123",
              }),
            }
          );
          const result = await response.json();

          if (result.history.length > 0) {
            setRezult(
              result.history?.map((item: any, index: any) => {
                const team1 = item.radiantHeroesHistory
                  ?.map((id: any) => data.data.find((hero) => hero.id === id))
                  .filter(Boolean);

                const team2 = item.direHeroesHistory
                  ?.map((id: any) => data?.data?.find((hero) => hero.id === id))
                  .filter(Boolean);

                const date = new Date(
                  item.timestamp ?? 0 * 1000
                ).toLocaleString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                });

                return {
                  id: index + 1,
                  analysis: {
                    team1,
                    team2,
                  },
                  date,
                };
              })
            );
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
              <p className="text-red-600">Силы Света</p>
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
      {rezults.length > 0
        ? rezults.map((el) => (
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
                  <p className="text-green-600">Силы Света</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <p className="text-red-600">Силы Света</p>
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
        : "На данный момент нет истории"}
    </section>
  );
};
