import Logo from "../assets/Logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function FooterOne() {
  return (
    <footer className="flex flex-wrap justify-evenly items-start gap-6 py-8">
      <div className="w-12/12 lg:w-auto flex justify-center items-center">
        <div className="flex flex-col w-fit gap-5">
          <img className="h-[20px] w-auto" src={Logo} />
          <div className="flex justify-center items-center gap-4">
            <span className="text-xl opacity-40 cursor-pointer">
              <FaFacebook />
            </span>
            <span className="text-xl opacity-40 cursor-pointer">
              <FaInstagram />
            </span>
            <span className="text-xl opacity-40 cursor-pointer">
              <FaYoutube />
            </span>
          </div>
        </div>
      </div>
      <p className="w-12/12 lg:w-4/12 px-4">
        An awesome & poweful tools for your business, increase business revenue.
        with evaluating in depth variety of data sets and including the speed of
        tech adaptation we can build bridges between any companies and their
        customers.
      </p>
      <ul className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Home</h3>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Solutions</li>
        <li className="cursor-pointer">Resources</li>
        <li className="cursor-pointer">Pricing</li>
      </ul>
      <ul className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">About Us</h3>
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Content</li>
        <li className="cursor-pointer">Carrer</li>
      </ul>
    </footer>
  );
}

export default FooterOne;
