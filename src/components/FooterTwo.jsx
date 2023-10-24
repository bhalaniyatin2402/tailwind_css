import { BsGlobe } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";

function FooterTwo() {
  return (
    <footer className="bg-[#E5E7EB] flex flex-col lg:flex-row lg:justify-between gap-5 justify-center items-center px-8 py-4">
      <ul className="flex items-center gap-3 text-[#828FA1] lg:order-2 lg:gap-5">
        <li className="text-xs cursor-pointer">Terms of Service</li>
        <li className="text-xs cursor-pointer">Privacy Policy</li>
        <li className="text-xs cursor-pointer">Language</li>
      </ul>
      <div className="text-[#64748B] flex items-center gap-1 lg:order-3">
        <BsGlobe />
        English
        <span className="cursor-pointer text-xs">
          <BiSolidDownArrow />
        </span>
      </div>
      <p className="text-[#6C7B91] lg:order-1">©2022-2023 Trustco.</p>
    </footer>
  );
}

export default FooterTwo;
