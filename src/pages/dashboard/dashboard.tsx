import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ClipboardCopy, Bell } from "lucide-react";

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-textColor">
      <div className="w-full max-w-md">
        <div className="text-center space-y-1">
          <p className="text-textColor opacity-85 pt-[120px] text-center text-lg px-[50px]">
            Пробный режим. Осталось использований: 18
          </p>
        </div>

        <div className="text-center space-y-2 pt-16">
          <h2 className="text-lg font-semibold text-textColor opacity-90">
            Найден интересный матч!
          </h2>
          <p className="text-zinc-400">Для анализа нажмите сюда</p>
        </div>
        <div className="flex justify-center pt-14 mb-2">
          <Input
            className="w-[115px] text-center"
            placeholder="Введите токен"
          />
        </div>

        <div className="flex ml-[16px] justify-center gap-1 mb-2">
          <Button>Зарегистрироваться</Button>
          <button className="p-0 m-0 border-none bg-transparent">
            <ClipboardCopy className="h-4 w-4" />
          </button>
        </div>

        <div className="flex justify-center py-0">
          <Button className="bg-slate-500 text-slate-300 opacity-70">
            Начать демо
          </Button>
        </div>

        <div className="pt-8 text-center flex justify-center items-center gap-2">
          <p className="opacity-70">Управлять уведомлениями</p>
          <Bell className="h-4 w-4 mr-2" />
        </div>

        <div className="text-center">
          <p className="text-zinc-400">
            Телеграм Бот:{" "}
            <Link to="/" className="text-purple-400 hover:text-purple-300">
              @DotaDivinerBot
            </Link>
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 text-sm pt-4">
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Руководство
          </Link>
          <span className="text-textColor">{"<--|-->"}</span>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Поддержка
          </Link>
        </div>
      </div>
    </div>
  );
};
