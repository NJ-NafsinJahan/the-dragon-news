import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h1 className="m-2 text-[#403F3F] text-[20px] font-semibold mb-2 ">
        Login With
      </h1>
      <div className=" flex flex-col gap-2 m-2">
        <button className=" btn flex justify-center items-center gap-3 text-blue-600 border border-blue-600">
          <FaGoogle />
          Login With Google
        </button>
        <button className=" btn flex justify-center items-center gap-3 text-[#403F3F] border border-[#403F3F]">
          <FaGithub />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
