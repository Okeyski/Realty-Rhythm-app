import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { TbHomeSignal } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <TbHomeSignal  className="h-8 w-auto text-[#243a6c]" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} RealtyRhythm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
