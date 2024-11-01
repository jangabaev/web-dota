import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-textColor">
      <div className="w-full max-w-md">
        <div className="pt-[150px]">
          <img className="light-logo" alt="" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-textColor opacity-85 pt-[120px] text-center text-lg px-[50px]">
            Пробный режим. Осталось использований: 18
          </p>
        </div>

        {/* <div className="text-center space-y-2 pt-16">
          <h2 className="text-lg font-semibold text-textColor opacity-90">
            Найден интересный матч!
          </h2>
          <p className="text-zinc-400">Для анализа нажмите сюда</p>
        </div> */}

        {/* <div className="text-center">
          <p className="text-zinc-400">
            Телеграм Бот:{" "}
            <Link to="/" className="text-purple-400 hover:text-purple-300">
              @DotaDivinerBot
            </Link>
          </p>
        </div> */}

        <div className="flex justify-center items-center gap-4 text-sm pt-[100px]">
          <Link
            to="https://dotadiviner.ru/index.html#content16-4"
            className="text-purple-400 hover:text-purple-300"
          >
            Руководство
          </Link>
          <span className="text-textColor">{"<--|-->"}</span>
          <Link
            to="https://t.me/stenzorka"
            className="text-purple-400 hover:text-purple-300"
          >
            Поддержка
          </Link>
        </div>
      </div>
    </div>
  );
};
