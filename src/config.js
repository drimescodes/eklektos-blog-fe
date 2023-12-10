
const API_BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:1337'
    : 'https://eklektos-blog-backend.onrender.com'; 

export default API_BASE_URL;
