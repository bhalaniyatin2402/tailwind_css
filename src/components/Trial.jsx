import Decoration from "../assets/Decorations.png";
import { BiRightArrowAlt } from "react-icons/bi";

function Trial() {
  return (
    <section className="bg-[#12141D] text-white p-4 pb-0 md:flex">
      <div className="w-full md:w-8/12 flex justify-center md:justify-start md:ml-12 items-center">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl lg:mb-10 font-semibold">
            Take Your Customer <br /> Service To The Next Level
          </h1>
          <div className="flex bg-[#F0B73F] font-semibold w-fit mt-5 px-3 py-1 rounded-3xl cursor-pointer">
            Get 14 Days Free Trail
            <span className="text-2xl">
              <BiRightArrowAlt />
            </span>
          </div>
          <p className="text-[#7C828D] mt-4">No credit card required</p>
        </div>
      </div>
      <div className="md:w-4/12">
        <img className="md:mt-12 lg:mt-16" src={Decoration} alt="" />
      </div>
    </section>
  );
}

export default Trial;
