import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      {" "}
      <h1 className="font-semibold text-[20px] text-[#403F3F]">
        All categories
      </h1>{" "}
      <div>
        <p className="font-semibold text-[20px] text-center text-[#403F3F] bg-[#E7E7E7] my-2 p-2 rounded">
          National News
        </p>
        <ul className="flex flex-col gap-3 text-center">
          {categories.news_category.map((category) => {
            return (
              <li
                key={category.category_id}
                className={`${activeId === category.category_id && "bg-[#f3cbd6] text-[#222222]"} text-[#9F9F9F] font-medium text-[18px]`}
              >
                {" "}
                <Link
                  href={`/category/${category.category_id}`}
                  className="block"
                >
                  {category.category_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
