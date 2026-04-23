import { LogoIcon } from "@/shared/assets";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-row w-90 items-start  justify-between">
        <div>
          <NavLink className="w-fit h-fit" to="/">
            <img
              src={LogoIcon}
              alt="daytoyou 로고"
              className="ml-8 w-10 h-10"
            />
          </NavLink>
        </div>
        <div className="flex flex-row items-center mr-8 justify-center">
          <NavLink to="/">1</NavLink>
          <NavLink to="/">2</NavLink>
          <button>3</button>
        </div>
      </div>
    </div>
  );
}
