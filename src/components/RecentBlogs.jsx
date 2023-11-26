import React from "react";
// import Blogs from "./Blogs";

import SideWaysBlogCard from "./SideWaysBlogCard";

const RecentBlogs = ({ latestThreeBlogs}) => {
  // Get the latest three blog posts
 
  return (
    <div className="px-4 sm:px-8">
      <h2 className="text-2xl font-bold py-8 sm:py-[5rem]">Recent Blog Posts</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 sm:grid-rows-2 ">
        {latestThreeBlogs.length > 0 && latestThreeBlogs.map((blog) => (
           
            <SideWaysBlogCard key={blog.id} blog={blog} className=" max-h-[180px]" />
          
        ))}

</div>

{/* <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[40dvh]">
    <div className="row-span-2 bg-red-900">1</div>
    <div className="bg-black">2</div>
    <div className="col-span-2 col-start-1 row-start-3 bg-blue-900">3</div>
    <div className="col-start-2 row-start-2 bg-green-900">4</div>
</div>
     */}
    </div>
  );
};

export default RecentBlogs;
