import React from "react";
import { FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import LogoShow from "./LogoShow";

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-start items-center bg-background pb-4 shadow-lg z-50">
      <div className="w-full flex justify-start items-center bg-primary py-6 pl-5 gap-2">
        <Link href="#" target="_blank" className="text-background">
          <FaWhatsappSquare size={25} />
        </Link>
        <Link href="#" target="_blank" className="text-background">
          <FaInstagramSquare size={25} />
        </Link>
      </div>
      <div className="absolute top-5 w-full flex justify-center items-center">
        <LogoShow />
      </div>
    </div>
  );
};

export default Navbar;
