import {Navbar, RecentBlogs, Blogs, Footer } from "../components";
import { useRef, useState, useEffect } from "react";
import { useFetch } from "../hooks";
import API_BASE_URL from "../config";

let postPerPage = 5;

const Homepage = () => {
  const currentPage = useRef(1);
  const [blogsPerPage, setBlogsPerPage] = useState([]);
  const apiUrl = `/api/blogs?pagination[page]=${currentPage.current}&pagination[pageSize]=${postPerPage}&populate=*`;

  const { data: blogs } = useFetch(`${API_BASE_URL}${apiUrl}`);


  const fetchNext = () => {
    currentPage.current += 1;
    
    setBlogsPerPage(blogs?.data || []);
  };
  useEffect(() => {
    setBlogsPerPage(blogs?.data || []);
  }, [blogs]);

  const latestThreeBlogs = blogs?.data?.slice(-4).reverse() || [];

  return (
    <div className="">
      <Navbar />

      <p className="text-3xl sm:text-4xl font-bold text-center py-6 sm:py-0 sm:pt-12">
        EKLEKTOS' BLOG
      </p>

      <RecentBlogs latestThreeBlogs={latestThreeBlogs} />

      <Blogs blogs={blogsPerPage} />
      <button onClick={fetchNext}>Load next</button>

      <Footer />
    </div>
  );
};

export default Homepage;