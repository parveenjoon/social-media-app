import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
          <p>User ID: {post.userId}</p>
          <h2>Title: {post.title.slice(0, 20)}{post.title.length > 20 ? '...' : ''}</h2>
          <p>Body: {post.body.slice(0, 100)}{post.body.length > 100 ? '...' : ''}</p>
          <Link to={`/item/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
