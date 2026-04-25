import { LogoIcon } from "@/shared/assets";
import { NavLink } from "react-router-dom";
import { MessageCircleMore } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center mt-1">
      <div className="flex flex-row w-90 items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <NavLink className="w-fit h-fit" to="/">
            <img
              src={LogoIcon}
              alt="daytoyou 로고"
              className="ml-8 w-10 h-10"
            />
          </NavLink>
        </div>
        <div className="flex flex-row mr-8 items-center gap-2 justify-center">
          <NavLink to="/">
            <MessageCircleMore className="size-5 text-hand group-hover:scale-110 transition-transform" />
          </NavLink>
          <NavLink to="/">
            <CalendarDays className="size-5 text-hand group-hover:scale-110 transition-transform" />
          </NavLink>
          <button>
            <Menu className="size-5 text-hand group-hover:scale-110 transition-transform cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}
