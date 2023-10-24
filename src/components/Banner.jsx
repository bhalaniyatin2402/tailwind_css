import { BiRightArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import ManMobile from "../assets/Man_mobile.png";
import Images from "../assets/Images.png";

function Banner() {
  return (
    <section className="pt-[60p] gap-2 flex flex-col md:flex-row bg-gradient-to-r from-[#F1F4F6] to-[#D8E5EA]">
      <div className="md:w-1/2 lg:mx-16 p-3 h-full my-auto flex gap-4 flex-col items-center">
        <h3 className="text-2xl text-center md:text-4xl md:text-left font-bold">
          Find High-Potential Customers with
          <br />
          <span className="text-center text-[#043A53]">Trustco.</span>
        </h3>
        <p className="text-center md:text-left text-[#4E4E4E]">
          We provide sales teams and professionals with the knowledge, skill and
          discipline they need to be 10x more successful.
        </p>
        <div className="bg-[#043A53] text-white flex items-center md:self-start gap-3 px-3 py-1 rounded-3xl cursor-pointer">
          Explore Our Works
          <span className="bg-[#042E41] rounded-full text-2xl">
            <BiRightArrowAlt />
          </span>
        </div>
      </div>
      <div className="relative md:w-1/2 p-1 pb-0 right">
        <img className="w-[100%]" src={ManMobile} alt="" />
        <img
          className="absolute bottom-6 left-10 w-[150px]"
          src={Images}
          alt=""
        />
        <div className="w-24 h-24 md:w-32 md:h-32 absolute flex flex-col justify-center items-center right-10 bottom-36 bg-[#043A53] py-4 text-white rounded-full">
          <div className="bg-[#1D4D64] w-6 rounded-full text-2xl md:text-3xl md:w-8">
            <BiUpArrowAlt />
          </div>
          <p className="text-3xl md:text-4xl">98%</p>
          <p className="text-sm md:text-base">Sales Up</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
