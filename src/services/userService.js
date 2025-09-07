import axios from 'axios';

export const fetchUsers = async (query) => {
  //   const res = await axios.get('https://dummyjson.com/users');
  // 'https://dummyjson.com/users/search?q=5 це дорівнює {params: {q:5}}'
  const res = await axios.get('https://dummyjson.com/users/search', {
    params: { q: query},
  });
  return res.data.users;
};

export const fetchUserById = async (userId) => {
  const res = await axios.get(`https://dummyjson.com/users/${userId}`);
  return res.data;
};
export const fetchUserPosts = async (userId) => {
  const res = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
  return res.data.posts;
};
