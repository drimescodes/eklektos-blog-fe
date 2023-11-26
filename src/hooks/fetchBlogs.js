import useFetch from './useFetch';

const fetchBlogs = async (page = 1, pageSize = 6) => {
  const apiUrl = `http://localhost:1337/blogs?_page=${page}&_limit=${pageSize}`;

  const { data, error, loading } = useFetch(apiUrl);

  if (loading) {
    return { data: null, meta: null, loading };
  }

  if (error) {
    console.error('Error fetching blogs:', error);
    return { data: null, meta: null, loading: false, error };
  }

  // Extract pagination information from headers
  const totalItems = parseInt(data.headers.get('x-total-count'), 10);
  const totalPages = Math.ceil(totalItems / pageSize);

  return {
    data: await data.json(),
    meta: {
      pagination: {
        page,
        pageSize,
        pageCount: totalPages,
        total: totalItems,
      },
    },
    loading: false,
    error: null,
  };
};

export default fetchBlogs;
