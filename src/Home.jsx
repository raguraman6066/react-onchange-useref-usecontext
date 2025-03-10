import React, { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
export const dataContext = createContext();
function Home() {
  const [posts, setPosts] = useState(null);
  const data = "datadata";
  const navigate = useNavigate();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:3000/post", { signal })
      .then((data) => data.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      console.log("unmounted");
      controller.abort();
    };
  }, []);

  return (
    <div className="container">
      {/* <Link to={"/login"}>Login</Link> */}
      <dataContext.Provider value={data}>
        {/* <Login /> */}
      </dataContext.Provider>

      <div className="row justify-content-center m-3">
        {posts &&
          posts.map((post) => {
            return (
              <div
                key={post.id}
                className="card m-3"
                style={{ width: "18rem" }}
                onClick={() => {
                  navigate("/post/" + post.id);
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
