import logo from "../assets/Logo.png";
import { PiList } from "react-icons/pi";

function Header() {
  return (
    <header className="h-[60px] sticky top-0 left-0 flex py-2 px-5 z-10 items-center justify-between bg-gradient-to-r from-[#F1F4F6] to-[#D8E5EA]">
      <img className="h-[18px] lg:h-[20px] cursor-pointer" src={logo} alt="" />
      <nav className="hidden md:block">
        <ul className="flex gap-4 xl:gap-10">
          <li className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
            Features
          </li>
          <li className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
            Solutions
          </li>
          <li className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
            Company
          </li>
          <li className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
            Resources
          </li>
          <li className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
      <div className="hidden md:block gap-2 md:gap-3">
        <button className="px-2 lg:px-5 py-0.5 mr-2 bg-white border rounded-3xl hover:bg-blue-800 hover:text-white ease-in duration-300">
          Log In
        </button>
        <button className="px-2 lg:px-5 py-0.5 bg-blue-800 hover:bg-blue-950 text-white border rounded-3xl ease-in duration-300">
          Sign Up
        </button>
      </div>
      <div className="md:hidden text-3xl font-bold">
        <PiList />
      </div>
    </header>
  );
}

export default Header;
