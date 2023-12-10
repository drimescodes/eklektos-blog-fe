import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Markdown from 'react-markdown'
import API_BASE_URL from "../config";


const BlogContent = ({blogs}) => {
  console.log(blogs);
  const {id} = useParams()
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blogs) {
      const arr = blogs?.data?.filter((blog) => blog.id == id);
      if (arr && arr.length > 0) {
        setBlog(arr[0]);
      }
    }
  }, [blogs, id]);

  if (!blog) {
    return <div>Loading...</div>;
  }
  



  return (
    <div className="w-full pb-10 ">
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-8 gap-y-8 px-4 pt-4 sm:pt-12">

          <div className="col-span-3 gap-8">
             <img className="h-56 w-full object-cover "     src={blog?.attributes?.coverImg?.data[0]?.attributes?.url} alt="" /> 
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.attributes.blogTitle}</h1>
            <p className="pt-5 text-[1.2rem] leading-[1.8rem] "><Markdown >{blog.attributes.blogContent}</Markdown></p>
          </div>

          <div className="w-full rounded-xl overflow-hidden drop-shadow-md py-5  max-h-[250px] bg-blog-white-100 dark:bg-blog-blue-500">
              <div>
                  <img className="p-2 w-32 h-32 rounded-full mx-auto" src= {blog.authorImg} alt="" />
                  <h1 className="font-bold text-2xl text-center pt-3  ">{blog.attributes.authorName}</h1>
                  <p className="text-center font-medium">{ blog.authorDesc}</p>
              </div>
          </div> 

        </div>
      </div >
    </div >

    
  )
}

export default BlogContent;