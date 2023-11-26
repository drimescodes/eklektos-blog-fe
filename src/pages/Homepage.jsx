import {Navbar, RecentBlogs, Blogs, Footer } from "../components";
import { useRef, useState, useEffect } from "react";


let postPerPage = 5;

const Homepage = ({blogs}) => {
  const currentPage = useRef(1);
  const [blogsPerPage, setBlogsPerPage] = useState([]);

  const fetchBlogs = async () => {
    const apiUrl = `https://strapi-d43x.onrender.com/api/blogs?pagination[page]=${currentPage.current}&pagination[pageSize]=${postPerPage}&populate=*`;
    const res = await fetch(apiUrl);
    const json = await res.json();
    setBlogsPerPage(json);
    console.log(json);
  };

  const fetchNext = () => {
    currentPage.current += 1;
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const latestThreeBlogs = blogs?.data?.slice(-4).reverse() || [];
  console.log(latestThreeBlogs, "latest three");

  return (
    <div className="">
      <Navbar />

      <p className="text-3xl sm:text-4xl font-bold text-center  py-6 sm:py-0 sm:pt-12">
        EKLEKTOS' BLOG
      </p>

      <RecentBlogs latestThreeBlogs={latestThreeBlogs} />

      <Blogs blogs={blogsPerPage?.data || []} />
      <button onClick={fetchNext}>Load next</button>

      <Footer />
    </div>
  );
};

export default Homepage;