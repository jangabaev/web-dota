import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ArrowLeft, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

import data from "../../../data.json";

interface ITeam {
  id: number;
  name: string;
  photo: string;
}

export const Analysis = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState<ITeam[]>([]);
  const [team2, setTeam2] = useState<ITeam[]>([]);
  const [dataGeroy, setDataGeroy] = useState(data.data);

  const hendleChange = (el: string) => {
    if (el) {
      return setDataGeroy(
        data.data.filter((item) =>
          item.name.toLowerCase().includes(el.toLowerCase())
        )
      );
    }
    setDataGeroy(data.data);
  };

  const teamClick = (item: ITeam, index: number) => {
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
      setTeam((prev) => {
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
  };

  const clearClick = () => {
    setTeam([]);
    setTeam2([]);
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
    console.log("isledim");
    navigate("/history/1");
    fetch("https://appapi.dotadiviner.ru/tgminiapp_analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer dfejdfbjerwbgfjrbgjrebj`,
      },
      body: JSON.stringify({
        token: "fewfwjk",
        radiant_heroes_id: [1, 2, 3, 4, 5],
        dire_heroes_id: [21, 32, 1, 3, 3],
      }),
    }).then((res) => console.log(res));
  };

  return (
    <section className="pt-3">
      <p className="text-green-800 pl-7 text-lg ">Силы Света</p>
      <div className="h-[45px] w-full bg-green-500 flex">
        {team && team.length > 0
          ? team.map((geroy) => (
              <div className="w-1/5" onClick={() => geroyKick(geroy, 1)}>
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
        Силы Света
      </p>
      <div className="h-[45px] w-full bg-red-500 flex justify-end">
        {team2 && team2.length > 0
          ? team2.map((geroy) => (
              <div className="w-1/5" onClick={() => geroyKick(geroy, 2)}>
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
            <Input
              className="w-[180px] py-1"
              placeholder="Введите имя героя"
              onChange={(e) => hendleChange(e.target.value)}
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

      <div className="flex gap-2 justify-center py-8">
        <div className="h-[428px] overflow-y-auto scrollable-element">
          {dataGeroy.map((item) => {
            return (
              <div key={item.id} onClick={() => teamClick(item, 1)}>
                <Card name={item.name} photo={item.photo} id={item.id} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <ArrowLeft className="text-textColor" />
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
    </section>
  );
};
