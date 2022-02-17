import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = async () => {
    let res = await axios.post("http://localhost:4000/users/login", {
      email,
      password,
    });
    console.log(res);
    if (res.data.statusCode === 200) {
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("firstName", res.data.firstName);
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="login m-auto"
      style={{ backgroundColor: "grey", width: "820px", color: "white" }}
    >
      <h2 className="text-center text-light mt-5 pt-3">Login</h2>
      <Form style={{ width: "50%" }} className="m-auto mt-5">
        <Form.Group className="mb-">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <div>
          <Button
            variant="primary"
            className="d-flex m-auto mt-5"
            onClick={() => handleSubmit()}
          >
            Login
          </Button>
        </div>
        <Form.Text className="text-white text-center mt-3 pb-3">
          <p classname="text-light">
            Not registered yet ?&nbsp;
            <a href="/signup" className="text-decoration-none text-dark">
              {" "}
              Create an Account
            </a>{" "}
          </p>
        </Form.Text>
      </Form>
    </div>
  );
}

export default Login;
