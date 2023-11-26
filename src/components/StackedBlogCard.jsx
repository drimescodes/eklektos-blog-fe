import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
const StackedBlogCard = ({ blog }) => {
  const { blogTitle, blogDesc, coverImg } = blog.attributes;

  return (
    <Link to={`/blog/${blog.id}`}>
      <div className={` bg-blog-white-100 dark:bg-blog-blue-100 rounded-xl overflow-hidden drop-shadow-md`}>
        <img
          className="h-[6.5rem] w-full object-cover"
          src={`http://localhost:1337${coverImg.data.attributes.url}`}
          alt=""
        />
        <div className="p-6 sp">
        <p className="text-[#6941C6] text-[.95rem]">
                      
                      {format(
                        new Date(blog.attributes.publishedAt),
                        "MMMM d, yyyy"
                      )}
                    </p>
          <h3 className="font-bold text-xl my-1">{blogTitle}</h3>
          <p className="text-gray-600 text-sm">{blogDesc}</p>
        </div>
      </div>
    </Link>
  );
};

export default StackedBlogCard;