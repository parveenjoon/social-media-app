import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.posts.find(p => p.id === Number(id)));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="item-detail">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>User ID: {post.userId}</p>
      <h1>Title: {post.title}</h1>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default ItemDetail;
