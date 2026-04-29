import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";

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

export default async function Home() {
  // for right sidebar data fetch
  const categories = await getCategories();
  console.log("categories.news_category", categories);

  // for middle news bar data fetch
  // const news = await getNewsByCategoryId({ category_id: "03" });
  const news = await getNewsByCategoryId({ category_id: "03" });
  console.log(news, "news");

  return (
    <div className=" container mx-auto grid grid-cols-12 gap-4 my-6 py-2">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={"05"}></LeftSidebar>
      </div>
      <div className=" font-bold text-xl bg-blue-200 col-span-6">
        {" "}
        All News
        <div className="space-y-4">
          {news.map((n) => {
            return (
              <div key={n.id} className="p-6 rounded-md border">
                {n.title}{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="  bg-yellow-20 col-span-3">
        {" "}
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
