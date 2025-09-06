import { useEffect, useState } from 'react';
import css from './UserPosts.module.css';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { fetchUserPosts } from '../../services/userService.js';

export default function UserPosts() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    // axios
    //   .get(`https://dummyjson.com/users/${userId}/posts`)
    //   .then((res) => setPosts(res.data.posts))
    //   .finally(() => setLoading(false));
    fetchUserPosts(userId).then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <div className={css.container}>
      {loading && <strong>Loading posts...</strong>}
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id} className={css.post}>
            <h3 className={css.title}>{post.title}</h3>
            <p className={css.body}>{post.body}</p>
          </div>
        ))}
    </div>
  );
}
