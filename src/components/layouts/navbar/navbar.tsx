import { NavLink } from "react-router-dom";
import { House, ChartNoAxesColumnIncreasing, History } from "lucide-react";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Главная",
      icon: House,
      to: "/",
    },
    {
      id: 2,
      name: "Аналитика",
      icon: ChartNoAxesColumnIncreasing,
      to: "/analysis",
    },
    {
      id: 3,
      name: "История",
      icon: History,
      to: "/history",
    },
  ];
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsKeyboardOpen(true);
    const handleBlur = () => setIsKeyboardOpen(false);

    window.addEventListener("focusin", handleFocus); // Klaviatura ochilganda
    window.addEventListener("focusout", handleBlur); // Klaviatura yopilganda

    return () => {
      window.removeEventListener("focusin", handleFocus);
      window.removeEventListener("focusout", handleBlur);
    };
  }, []);
  return (
    <nav
      className={`flex items-center justify-between fixed bottom-0 left-0 right-0 bg-bgNav px-8 py-[16px] z-10 navbar position: ${
        isKeyboardOpen ? "absolute" : "fixed"
      } ${isKeyboardOpen && `top-[680px]`}`}
    >
      {links.map((item) => (
        <NavLink
          to={item.to}
          key={item.id}
          className="flex flex-col justify-center gap-1 text-textNav text-sm navlink"
        >
          <span className="flex align-middle justify-center">
            <item.icon className="py-[4px] px-[18px] h-[27px] w-auto" />
          </span>
          <p>{item.name}</p>
        </NavLink>
      ))}
    </nav>
  );
};
