import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SocialLogin.css";
const SocialLogin = () => {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  useEffect(() => {
    if (user) {
      navigate("/inventory");
    }
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {errorElement}

      <button onClick={() => signInWithGoogle()} className="row g-button">
        <div className="col-md-12 ">
          <div className="g-image">
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
            Signup Using Google
          </div>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
