import Image from "next/image";
import logo from "@/assets/logo.png";
import { compareAsc, format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div className="text-center py-8 space-y-3 ">
      <Image
        src={logo}
        alt="logo img"
        width={450}
        height={500}
        className="mx-auto mt-4.5 "
      ></Image>
      <p className="text-[19px] font-normal text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className=" text-[20px] font-medium text-[#676666]">
        {format(new Date(), "EEEE, MMM dd, YYY")}
      </p>
    </div>
  );
};

export default Header;
