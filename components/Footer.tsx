import Link from "next/link";
import Logo from "./Logo";
import DynamicYear from "./ui/dynamic-year";
import footerSections from "@/data/footerData";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-5">
    <div className="container mx-auto bg-white text-gray-700 py-6 px-4 md:px-8">
      <hr className="bg-input h-[0.08rem] mx-auto my-10"/>
      {/* Title */}
      <div className="w-full mx-auto lg:grid grid-cols-[auto,auto]">
        <div className="h-full flex items-center justify-center md:justify-start">
          <Logo />
        </div>
        {/* Section Grid */}
        <div className="max-w-[1240px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b-2 border-gray-300 py-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 text-[#282B27]">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-500 hover:text-black py-1 text-sm cursor-pointer"
                  >
                    <Link href={"/"}>
                    {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full mx-auto flex flex-col sm:flex-row justify-between items-center py-4 sm:py-8 text-center sm:text-left">
        <p>&copy; <DynamicYear/> Alaska App Studios All rights reserved.</p>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-2 sm:mt-0">
          <span className="hover:text-black cursor-pointer">Terms of Use</span>
          <span className="hover:text-black cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-black cursor-pointer">Security</span>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
