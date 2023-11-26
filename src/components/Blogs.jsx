import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";


const Blogs = ({ blogs }) => {
  if (blogs.length < 1) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched.
  }
  return (
    <div className="w-full py-20 sm:py-28">
      <h2 className="text-2xl font-bold pb-4 px-4 sm:px-12">All blog posts</h2>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-4 ">
            {blogs?.map((blog) => (
                <Link to={`/blog/${blog.id}`} key={blog.id}>
                <div
                  className="min-h-[300px] bg-blog-white-100 dark:bg-blog-blue-100 rounded-xl overflow-hidden drop-shadow-md
"
                >
                  <img
                    className="aspect-video  w-full object-cover"
                    src={`http://localhost:1337${blog?.attributes?.coverImg?.data?.attributes?.url}`}
                    alt=""
                  />
                  <div className="p-4">
                    <p className="text-[#6941C6] text-[.95rem]">
                      {format(
                        new Date(blog?.attributes?.publishedAt),
                        "MMMM d, yyyy"
                      )}
                    </p>
                    <h3 className="font-bold text-2xl pt-2 dark:text-blog-white-200 text-blog-black-300 line-clamp-1">
                      {blog?.attributes?.blogTitle}
                    </h3>
                    <p className=" pt-2 text-[1.05rem] dark:text-[#C0C5D0] text-[#667085] line-clamp-1">
                      {blog?.attributes?.blogDesc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
