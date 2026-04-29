import Image from "next/image";
import Link from "next/link";
import React from "react";
import useImg from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-5 container mx-auto py-4">
      <div></div>
      <ul className="flex justify-between items-center gap-5 text-[20px] text-[#706F6F]">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className=" flex justify-between items-center gap-4">
        <Image src={useImg} alt="" width={40} height={40}></Image>
        <button className="btn bg-[#403F3F] text-amber-50 text-[20px] font-semibold">
          <Link href={"/login"}> Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
