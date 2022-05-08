import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handlepass = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("Email sent");
    });
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="w-50 mx-auto  mt-5">
        <h1>Login </h1>
        <Form onSubmit={handleSignInUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We respect your privacy.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <p className="text-danger">{error?.message}</p>
          {loading && <p>Loading...</p>}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Button onClick={handlepass} variant="link">
          {" "}
          Forgat password
        </Button>
        <p>
          Electronics Mania <Link to="/signup">Create a account</Link>
        </p>
        <hr />

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
