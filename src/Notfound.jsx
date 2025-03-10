import React from "react";
import { Link } from "react-router-dom";
function Notfound() {
  return (
    <>
      <h2 className="text-danger">Page not found</h2>
      <Link to={"http://localhost:5173"} className="btn btn-primary">
        Home
      </Link>
    </>
  );
}

export default Notfound;
