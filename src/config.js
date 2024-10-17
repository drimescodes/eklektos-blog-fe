
const API_BASE_URL =
  import.meta.env.MODE === 'development'
    // ? 'http://localhost:1337'
    ? 'https://backend-eklektos.onrender.com'
    : 'https://backend-eklektos.onrender.com'; 

export default API_BASE_URL;
