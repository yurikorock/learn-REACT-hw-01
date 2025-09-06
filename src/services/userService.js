import axios from 'axios';

export const fetchUsers = async () => {
  const res = await axios.get('https://dummyjson.com/users');
  return res.data.users;
};

export const fetchUserById = async(userId)=> {
    const res = await axios.get(`https://dummyjson.com/users/${userId}`);
  return res.data;
}
export const fetchUserPosts = async(userId)=> {
    const res = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
  return res.data.posts;
}
