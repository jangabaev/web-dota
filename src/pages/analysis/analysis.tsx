import { useEffect, useRef, useState } from "react";
import { useValueContext } from "../../app/app";
import { Button } from "../../components/ui/button";
import { Chart } from "../../components/chart";
import { Table } from "../../components/table/table";
import { Card } from "../../components/ui/card";
import { Modal } from "../../components/modal/modal";
import { History } from "lucide-react";

import data from "../../../data.json";

interface ITeam {
  id: number;
  name: string;
  photo: string;
}

export const Analysis = () => {
  const {
    analiz,
    setAnaliz,
    team,
    team2,
    setTeam,
    setTeam2,
    setRezult,
    rezult,
  } = useValueContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [dataGeroy, setDataGeroy] = useState(data.data);
  const [isModal, setIsModal] = useState(false);

  const teamClick = (item: ITeam, index: number) => {
    setSearch("");
    let count = 0;
    if (index === 1) {
      setTeam2((prev) => {
        return prev.filter((el) => {
          if (el.id !== item.id) {
            return el;
          }
        });
      });
      team.forEach((el) => {
        if (el.id === item.id) {
          count++;
        }
      });
      if (team.length === 5 || count > 0) {
        return;
      }
      setTeam((prev) => [...prev, item]);
    }
    if (index === 2) {
      setTeam((prev: ITeam[]) => {
        return prev.filter((el) => {
          if (el.id !== item.id) {
            return el;
          }
        });
      });
      team2.forEach((el) => {
        if (el.id === item.id) {
          count++;
        }
      });
      if (team2.length === 5 || count > 0) {
        return;
      }
      setTeam2((prev) => [...prev, item]);
    }

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const clearClick = () => {
    setTeam([]);
    setTeam2([]);
    setSearch("");
    setAnaliz(false);
  };

  const backClick = () => {
    setSearch("");
    setAnaliz(false);
  };

  const geroyKick = (item: ITeam, index: number) => {
    if (index === 1) {
      setTeam((prev) => {
        return prev.filter((el) => {
          if (el.id !== item.id) {
            return el;
          }
        });
      });
    } else {
      setTeam2((prev) => {
        return prev.filter((el) => {
          if (el.id !== item.id) {
            return el;
          }
        });
      });
    }
  };

  const analysisClick = () => {
    let radiant_heroes_id = [];
    let dire_heroes_id = [];

    for (let i = 0; i < 5; i++) {
      radiant_heroes_id.push(team[i].id);
      dire_heroes_id.push(team2[i].id);
    }

    if (window.Telegram) {
      window.Telegram.WebApp.ready();

      fetch("https://appapi.dotadiviner.ru/v2/tgminiapp_analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: window.Telegram.WebApp.initData,
          radiant_heroes_id,
          dire_heroes_id,
        }),
      })
        .then(async (res) => {
          if (res.status === 200) {
            setAnaliz(true);
            const data = await res.json();
            return setRezult(data);
          }
          setAnaliz(false);
          setIsModal(true);
        })
        .catch(() => {
          setIsModal(true);
        });
    }
  };

  useEffect(() => {
    if (search) {
      return setDataGeroy(
        data.data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    setDataGeroy(data.data);
  }, [search]);

  useEffect(() => {
    if (team2) {
      if (team.length !== 5 || team2.length !== 5) {
        setAnaliz(false);
      }
    }
  }, [team2]);

  return (
    <section className="pt-3">
      {isModal && (
        <>
          <Modal isModal={isModal} setIsModal={setIsModal} />
        </>
      )}
      {analiz ? (
        <>
          <div>
            <p className="text-green-800 pl-7 text-lg ">Силы Света</p>
            <div className="h-[45px] w-full bg-green-500 flex">
              {team && team.length > 0
                ? team.map((geroy) => (
                    <div
                      className="w-1/5"
                      onClick={() => geroyKick(geroy, 1)}
                      key={geroy.id}
                    >
                      <img
                        src={`/img/${geroy.photo}`}
                        alt=""
                        className="w-full h-[45px]"
                      />
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <div>
            <p className="text-red-700 pl-7 text-lg text-right pr-7 mt-4">
              Силы Тьмы
            </p>
            <div className="h-[45px] w-full bg-red-500 flex justify-end">
              {team2 && team2.length > 0
                ? team2.map((geroy) => (
                    <div
                      className="w-1/5"
                      onClick={() => geroyKick(geroy, 2)}
                      key={geroy.id}
                    >
                      <img
                        src={`/img/${geroy.photo}`}
                        alt=""
                        className="w-full h-[45px]"
                      />
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <h3 className="text-lg text-center text-textColor opacity-80 mt-3">
            Преимущество команд в минуту игры
          </h3>
          <div className="flex items-center">
            <p className="vertical-text textVertical text-textColor opacity-70">
              Преимущ ущество
            </p>
            <Chart
              teamRadiant="Силы Света"
              teamDire="Силы Тьмы"
              team2={rezult?.radiant_chart ?? []}
              team={rezult?.dire_chart ?? []}
            />
          </div>

          <div className="px-2">
            <Table
              teamRadiant="Силы Света"
              teamDire="Силы Тьмы"
              team1={{
                win: rezult?.radiant_winrate ?? 0,
                point: rezult?.radiant_counter ?? 0,
                effect: rezult?.radiant_efficiency ?? 0,
                synergy: rezult?.radiant_synergy ?? 0,
                counterpick: rezult?.radiant_counterpick ?? 0,
              }}
              team2={{
                win: rezult?.dire_winrate ?? 0,
                point: rezult?.dire_counter ?? 0,
                effect: rezult?.dire_efficiency ?? 0,
                synergy: rezult?.dire_synergy ?? 0,
                counterpick: rezult?.dire_counterpick ?? 0,
              }}
            />
          </div>

          <div className="flex justify-center mt-4 mb-[100px]">
            <Button onClick={backClick}>Назад</Button>
          </div>
        </>
      ) : (
        <>
          <p className="text-green-800 pl-7 text-lg ">Силы Света</p>
          <div className="h-[45px] w-full bg-green-500 flex">
            {team && team.length > 0
              ? team.map((geroy) => (
                  <div
                    className="w-1/5"
                    onClick={() => geroyKick(geroy, 1)}
                    key={geroy.id}
                  >
                    <img
                      src={`/img/${geroy.photo}`}
                      alt=""
                      className="w-full h-[45px]"
                    />
                  </div>
                ))
              : ""}
          </div>
          <p className="text-red-700 pl-7 text-lg text-right pr-7 mt-4">
            Силы Тьмы
          </p>
          <div className="h-[45px] w-full bg-red-500 flex justify-end">
            {team2 && team2.length > 0
              ? team2.map((geroy) => (
                  <div
                    className="w-1/5"
                    onClick={() => geroyKick(geroy, 2)}
                    key={geroy.id}
                  >
                    <img
                      src={`/img/${geroy.photo}`}
                      alt=""
                      className="w-full h-[45px]"
                    />
                  </div>
                ))
              : ""}
          </div>

          <div className="flex justify-center opacity-60 items-center gap-2 py-2 pt-4 pl-[24px]">
            {team.length === 5 && team2.length === 5 ? (
              <>
                <Button onClick={analysisClick}>Анализировать</Button>
                <button
                  className="border-none bg-transparent p-0 m-0 text-textColor"
                  onClick={clearClick}
                >
                  <History />
                </button>
              </>
            ) : (
              <>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Введите имя героя"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`max-w-xs px-1 text-start text-inputText placeholder-gray-400 bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-purple-400 w-[180px] py-1`}
                />
                <button
                  className="border-none bg-transparent p-0 m-0 text-textColor"
                  onClick={clearClick}
                >
                  <History />
                </button>
              </>
            )}
          </div>

          <div className="flex gap-8 justify-center py-8">
            <div className="h-[428px] overflow-y-auto scrollable-element">
              {dataGeroy.map((item) => {
                return (
                  <div key={item.id} onClick={() => teamClick(item, 1)}>
                    <Card name={item.name} photo={item.photo} id={item.id} />
                  </div>
                );
              })}
            </div>

            <div className="h-[428px] overflow-y-auto scrollable-element">
              {dataGeroy.map((item) => {
                return (
                  <div key={item.id} onClick={() => teamClick(item, 2)}>
                    <Card
                      name={item.name}
                      photo={item.photo}
                      id={item.id}
                      key={item.id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
};
