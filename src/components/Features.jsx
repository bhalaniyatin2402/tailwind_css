import IllustOne from "../assets/illust_one.png";
import IllustTwo from "../assets/illust_two.png";
import IllustThree from "../assets/illust_three.png";

function Features() {
  return (
    <section className="m-2 py-6 lg:flex lg:flex-row lg:justify-evenly">
      <div className="md:w-full md:flex lg:w-auto justify-center">
        <div className="m-2 p-4 md:w-56">
          <div className="bg-[#043A53] w-fit text-white px-3 py-1 rounded-3xl">
            Beneficial
          </div>
          <h2 className="text-3xl mt-4 font-semibold">Beneficial Elements</h2>
          <p className="mt-4">
            An awesome & powerful tools for your business, increase business
            revenue
          </p>
        </div>
      </div>
      <div className="md:flex justify-center md:gap-4 lg:gap-6">
        <div className="m-2 p-4 md:w-56 md:mt-8 lg:mt-0 bg-[#F3F4F6] rounded-xl">
          <img className="w-16" src={IllustOne} alt="" />
          <h3 className="text-xl mt-4 font-semibold">Happy Customers</h3>
          <p className="mt-4">
            Productive agents are happy agents. Give them all the support tools
            and information they need to best serve your customers.
          </p>
        </div>
        <div className="m-2 mt-8 lg:mt-0 p-4 md:w-56 bg-[#F3F4F6] rounded-xl">
          <img className="w-16" src={IllustTwo} alt="" />
          <h3 className="text-xl mt-4 font-semibold">Best Integrations</h3>
          <p className="mt-4">
            Productive agents are happy agents. Give them all the support tools
            and information they need to best serve your customers.
          </p>
        </div>
        <div className="m-2 mt-8 lg:mt-0 p-4 md:w-56 bg-[#F3F4F6] rounded-xl">
          <img className="w-16" src={IllustThree} alt="" />
          <h3 className="text-xl mt-4 font-semibold">Grow Without Problems</h3>
          <p className="mt-4">
            Productive agents are happy agents. Give them all the support tools
            and information they need to best serve your customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
