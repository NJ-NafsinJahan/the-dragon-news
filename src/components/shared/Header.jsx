import Image from "next/image";
import logo from "@/assets/logo.png";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image src={logo} alt="logo img" width={300} height={400}></Image>
      <p>Journalism Without Fear or Favour</p>
      <p>date</p>
    </div>
  );
};

export default Header;
