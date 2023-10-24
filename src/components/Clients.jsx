import AmazonLogo from "../assets/Amazon.png";
import AtlassianLogo from "../assets/Atlassian.png";
import CanonLogo from "../assets/Canon.png";
import WalmartLogo from "../assets/Walmart.png";
import GoogleLogo from "../assets/Google.png";

function Clients() {
  return (
    <section className="flex flex-wrap flex-row gap-2 md:gap-4 lg:gap-9 justify-center items-center p-1 md:p-4">
      <h4 className="w-full lg:w-auto text-center font-semibold">
        Trusted by the best in the world
      </h4>
      <img className="m-2 w-24" src={GoogleLogo} />
      <img className="m-2 w-24" src={AtlassianLogo} />
      <img className="m-2 w-24" src={CanonLogo} />
      <img className="m-2 w-24" src={WalmartLogo} />
      <img className="m-2 w-24" src={AmazonLogo} />
    </section>
  );
}

export default Clients;
