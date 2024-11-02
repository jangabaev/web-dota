import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-textColor">
      <div className="w-full max-w-md">
        <div className="pt-[150px]">
          <img className="light-logo" alt="" />
        </div>
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
