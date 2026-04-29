import { Span } from "next/dist/trace";
import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title:
      "Breaking News: New React Version Released with Major Performance Boost",
  },
  {
    id: 2,
    title:
      " Breaking News:  Next.js 15 Introduces Faster Server Components and Routing",
  },
  {
    id: 3,
    title:
      "Breaking News:  JavaScript Remains the Most Popular Programming Language in 2026",
  },
  {
    id: 4,
    title: "Breaking News:  AI Tools Changing the Future of Web Development",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center bg-gray-300/50 gap-3 p-3 container mx-auto">
      <button className="btn bg-[#D72050] text-amber-50">Latest News</button>
      <Marquee pauseOnHover speed={100}>
        <div className=" flex gap-12">
          {news.map((n) => {
            return <span key={n.id}>{n.title}</span>;
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
