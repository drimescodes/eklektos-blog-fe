import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router";
import { useFetch } from "./hooks";
import { useState } from "react";

const App = () => {
  const { loading, data, error } = useFetch("https://strapi-d43x.onrender.com/api/blogs?pagination[page]=1&pagination[pageSize]=5&populate=*");

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="relative bg-blog-white-200 dark:bg-blog-blue-200 text-blog-black-300 dark:text-blog-white-200">
      <Routes>
        <Route path="/" element={<Homepage blogs={data ? data : ""} />} />
        <Route path="/blog/:id" element={<BlogContentPage blogs={data ? data : ""} />} />
      </Routes>
    </div>
  );
};

export default App;
