import React, { useState } from "react";
import TextField from "./textField";
import Button from "./button";
import styles from "../styles/loginForm.module.scss";
import client from "../../graphql/apolloClient";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useLogin } from "../../stores/LoginStore";


const GET_USER_QUERY = gql`
  query GetUser($email: String!) {
    user(email: $email) {
      password
      email
    }
  }
`;

function LoginForm() {
  const router = useRouter();
  const { setLoggedIn } = useLogin();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const { error, data } = useQuery(GET_USER_QUERY, {
    variables: { email: login },
    client,
  });

  function handleLoginClick() {
    if (!error && data && data.user) {
      console.log(data.user.email);
      setLoggedIn(true);
      router.push("/secretCollection");
    } else {
      setLoginError(true);
      setLogin("");
      setPassword("");
    }
  }

  function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div className={styles.loginForm}>
      {loginError && (
        <span className={styles.loginErrorMessage}>
          Your login or password are incorrect
        </span>
      )}

      <TextField
        Id="name"
        Name="name"
        Type="text"
        IfError={loginError}
        OnChange={handleLoginChange}
        Value={login}
        Placeholder="LOGIN"
      />
      <TextField
        Id="password"
        Type="password"
        IfError={loginError}
        OnChange={handlePasswordChange}
        Value={password}
        Placeholder="PASSWORD"
      />
      <div className={styles.buttonContainer}>
        <Button onClick={handleLoginClick} text="Login" />
      </div>
    </div>
  );
}

export default LoginForm;
