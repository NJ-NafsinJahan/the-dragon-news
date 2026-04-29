import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import React from "react";

// for right sidebar data fetch
async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

// for middle news bar data fetch
async function getNewsByCategoryId({ category_id }) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}

const newsByCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "paramsRes");

  // for right sidebar data fetch
  const categories = await getCategories();
  console.log("categories.news_category", categories);

  // for middle news bar data fetch
  const news = await getNewsByCategoryId({ category_id: id });
  //   const news = await getNewsByCategoryId(id);
  //   const news = await getNewsByCategoryId({ category_id: id });
  console.log(news, "news");

  return (
    <div className=" container mx-auto grid grid-cols-12 gap-4 my-6 py-2">
      {/* left side bar */}
      <div className=" col-span-3">
        <LeftSidebar
          categories={categories}
          activeId={id}
          //   activeId={{ category_id: id }}
        ></LeftSidebar>
      </div>

      {/* main news bar: middle */}
      <div className="col-span-6">
        {" "}
        <h1 className="font-semibold text-[20px] text-[#403F3F] mb-3">
          Dragon News Home
        </h1>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <NewsCard key={n._id} news={n}>
                  {/* {n.title}{" "} */}
                </NewsCard>
              );
            })
          ) : (
            <h2 className="text-center p-7">No News Found</h2>
          )}
        </div>
      </div>

      {/* right side bar */}
      <div className="  bg-yellow-20 col-span-3">
        {" "}
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default newsByCategoryPage;
