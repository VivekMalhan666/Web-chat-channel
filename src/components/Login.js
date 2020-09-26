import React from "react";
import "../assets/Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useDataLayerValue } from "../StateManager/DataLayer";
import { actionTypes } from "../StateManager/reducer";

function Login() {
  const [{}, dispatch] = useDataLayerValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://webdesigntips.blog/wp-content/uploads/2019/02/Slack-sparks-further-outrage-with-tweak-to-new-logo.jpg"></img>
        <div className="login__text">
          <h1>Welcome to Slacq</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
