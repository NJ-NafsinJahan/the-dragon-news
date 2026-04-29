import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const NewsCard = ({ news }) => {
  console.log("news data", news);
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* author info */}
        <div className=" flex justify-between items-center bg-slate-200 p-4">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <div className="">
              <h2>{news.author?.name}</h2>
              <h2>{news.author?.published_date}</h2>
            </div>
          </div>
          <div className=" flex gap-1.5 text-2xl">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>

        <h2 className="card-title text-[#403F3F] font-bold text-[20px] ">
          {news.title}
        </h2>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            height={500}
            width={500}
            className="w-full"
          />
        </figure>

        <p className="text-[#706F6F] text-[16px] line-clamp-3">
          {news.details}
        </p>
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center gap-8">
            <h1 className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <FaStar className="text-[#FF8C47]" />
              </span>
              {news.rating.number}
            </h1>
            <h1 className="flex items-center gap-2">
              {" "}
              <IoMdEye />
              {news.total_view}
            </h1>
          </div>
          <Link href={`/news/${news._id}`}>
            <button className="btn text-[#FF8C47] font-semibold text-lg">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
