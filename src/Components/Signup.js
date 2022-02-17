import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  let navigate = useNavigate();
  let [firstName, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCpassword] = useState("");
  let [passwordMatch, setMatch] = useState("");

  useEffect(() => {
    if (password == cpassword) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  });

  // http://localhost:4000/users/signup
  let handleSubmit = async () => {
    let res = await axios.post("http://localhost:4000/users/signup", {
      firstName,
      lastname,
      email,
      password,
      cpassword,
    });
    console.log(res);
    if (res.data.statusCode == 200) {
      navigate("/login");
    }
  };

  return (
    <div
      className="signup mt-5 m-auto pt-3"
      style={{ backgroundColor: "grey", width: "800px" }}
    >
      <h3 className="text-center text-white">Sign Up</h3>
      <Form
        className="mt-3"
        className="m-auto text-white"
        style={{ width: "50%" }}
      >
        <Form.Group className="mb-3" style={{ width: "800px" }}>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            className="col-md-6"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="Enter First Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: "800px" }}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            className="col-md-6"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Enter Last Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
          />
          {passwordMatch ? <div>Password Should Match</div> : <></>}
        </Form.Group>

        <div class="text-center pb-3 pt-3">
          <Button
            variant="primary"
            className="d-flex m-auto"
            onClick={() => handleSubmit()}
          >
            SignUp
          </Button>
        </div>
        <hr />
        <Form.Text className="text-white text-center mt-3 pb-3">
          <p classname="text-light">
            Already Have an account ?&nbsp;
            <a
              href="/login"
              className="text-decoration-none text-dark"
              style={{ fontSize: "18px" }}
            >
              {" "}
              Login
            </a>{" "}
          </p>
        </Form.Text>
      </Form>
    </div>
  );
}

export default SignUp;
