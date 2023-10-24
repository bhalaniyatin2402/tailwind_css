import TeamVideoBg from "../assets/team video BG.png";
import Play from "../assets/Play.png";

function Video() {
  return (
    <section className="bg-[rgb(4,58,83)] px-4 lg:px-20 pt-16">
      <div className="text-white lg:flex mb-10">
        <h2 className="text-2xl mb-3 lg:w-1/2 font-semibold lg:px-12 lg:text-4xl">
          High-Level Sales
          <span className="ml-2 text-[#F0B73F]">Teams & Professionals</span>
        </h2>
        <div className="text-left lg:w-1/2 lg:px-12">
          Circuit is flexible and affordable and offers you exceptional support
          to achieve your career goals. Circuit is a Global training provider
          based across the UK that specialises.
        </div>
      </div>
      <div className="relative flex justify-center">
        <img className="lg:px-12" src={TeamVideoBg} alt="" />
        <img
          className="absolute w-12 lg:w-28 left-[50%] bottom-[50%] -translate-x-6 translate-y-6 lg:-translate-x-14 lg:translate-y-14"
          src={Play}
          alt=""
        />
      </div>
    </section>
  );
}

export default Video;
