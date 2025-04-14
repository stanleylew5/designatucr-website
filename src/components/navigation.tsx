"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import navigations from "@/data/navigations";
import DAU from "@/public/icon.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-dau-primary-cool-100 bg-bgPeach sticky top-0 z-30 w-full border-b-4">
      <div className="flex items-center justify-between px-8 py-4">
        <Link
          href="/"
          className="flex items-center duration-300 hover:opacity-75"
        >
          <Image
            src={DAU}
            alt="design at ucr"
            className="w-16 duration-300 hover:opacity-60 md:w-20"
          />
        </Link>

        <div className="hidden space-x-16 md:flex">
          {navigations.map(({ name, link, target }, index) => (
            <Link
              key={index}
              href={link}
              target={target || "_self"}
              className="text-dau-primary-cool-400 hover:text-dau-primary-cool-200 font-medium duration-300"
            >
              <p>{name}</p>
            </Link>
          ))}
        </div>

        <div onClick={handleNav} className="md:hidden">
          <IoMenu size={32} className="text-dau-primary-cool-400" />
        </div>
      </div>
      {nav && (
        <div className="bg-bgPeach flex flex-col items-center justify-evenly overflow-hidden px-8 py-4 transition-all duration-500 md:hidden">
          {navigations.map(({ name, link, target }, index) => (
            <Link
              key={index}
              href={link}
              target={target || "_self"}
              onClick={handleNav}
              className="text-dau-primary-cool-400 hover:text-dau-primary-cool-200 py-2 font-medium duration-300"
            >
              <p>{name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
