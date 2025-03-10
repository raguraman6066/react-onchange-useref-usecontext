import React, { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";

function Login() {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [same, setSame] = useState(true);

  function changePwd1(event) {
    setPwd1(event.target.value);
  }
  function changePwd2(event) {
    setPwd2(event.target.value);
    console.log(pwd1, pwd2);
    if (pwd1 == event.target.value) {
      console.log("same");
      setSame(true);
    } else {
      console.log("not same");
      setSame(false);
    }
  }

  return (
    <>
      <Counter />
      <Link to={"/"}>Home</Link>
      <form className="my-5 mx-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pwd1}
            onChange={changePwd1}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={pwd2}
            onChange={changePwd2}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            I Agree
          </label>
        </div>
        {!same && <p>Password not match</p>}
        <button type="submit" className="btn btn-primary">
          Create account
        </button>
      </form>
    </>
  );
}

export default Login;
