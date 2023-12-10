import { Homepage, BlogContentPage, Project, About, Newsletter } from "./pages";
import { Routes, Route } from "react-router";
import { useFetch } from "./hooks";
import API_BASE_URL from "./config";


const API_ENDPOINT = "/api/blogs?pagination[page]=1&pagination[pageSize]=5&populate=*";
const API_URL = `${API_BASE_URL}${API_ENDPOINT}`;


const App = () => {
  const { loading, data, error } = useFetch(API_URL);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="min-h-[100dvh] relative bg-blog-white-200 dark:bg-blog-blue-200 text-blog-black-300 dark:text-blog-white-200">
      <Routes>
        <Route path="/" element={<Homepage blogs={data || null} />} />
        <Route path="/blog" element={<Homepage />} />
        <Route path="/project" element={<Project  />} />
        <Route path="/about" element={<About  />} />
        <Route path="/newsletter" element={<Newsletter  />} />


        <Route path="/blog/:id" element={<BlogContentPage blogs={data || null} />} />
      </Routes>
    </div>
  );
};

export default App;
