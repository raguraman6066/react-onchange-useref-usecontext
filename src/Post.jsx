import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/post/" + id)
      .then((data) => data.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div>
      {post && (
        <div className="card m-5 p-5">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
}

export default Post;
