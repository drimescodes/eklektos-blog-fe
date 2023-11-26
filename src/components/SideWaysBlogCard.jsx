import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const SideWaysBlogCard = ({ blog, className }) => {
  const { blogTitle, blogDesc, coverImg } = blog?.attributes;

  return (
    <Link to={`/blog/${blog.id}`}>
      <div className={` bg-blog-white-100 dark:bg-blog-blue-100 rounded-xl overflow-hidden drop-shadow-md flex gap-8 ${className}`}>
        <img
          className="w-[50%]  object-cover "
          src={`http://localhost:1337${coverImg?.data?.attributes?.url}`}
          alt=""
        />
        <div className="flex flex-col justify-between py-6 gap-2">
        <p className="text-[#6941C6] text-[.95rem] ">
                      
                      {format(
                        new Date(blog.attributes.publishedAt),
                        "MMMM d, yyyy"
                      )}
                    </p>
          <h3 className="font-bold text-xl  line-clamp-2 sm:line-clamp-3">{blogTitle}</h3>
          <p className="dark:text-[#C0C5D0] text-[#667085] text-sm line-clamp-1">{blogDesc}</p>
        </div>
      </div>
    </Link>
  );
};

export default SideWaysBlogCard