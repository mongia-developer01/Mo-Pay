import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {},
  button: {},
}));

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    // replace the current URL with the root URL
    navigate("/");
  }, [navigate]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleIdle = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const startIdleTimer = () => {
    let timeoutId = null;
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleIdle, 60000);
    };
    resetTimer();
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keypress", resetTimer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Please enter a username");
    } else if (password.trim() === "") {
      setError("Please enter a password");
    } else {
      let designation = "";
      switch (username) {
        case "admin":
          if (password === "123") {
            designation = "admin";
          }
          break;
        case "employee":
          if (password === "001") {
            designation = "employee";
          }
          break;
        case "manager":
          if (password === "321") {
            designation = "manager";
          }
          break;
        default:
          setError("Invalid username or password");
          return;
      }
      
      if (designation !== "") {
        sessionStorage.setItem("accessToken", "1234");
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("designation", designation); // save designation in session storage
        startIdleTimer();
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <form className={classes.form} onSubmit={handleSubmit}>
        <br />
        <Typography variant="h5">Login Form</Typography>
        <br />
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          className={classes.textField}
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <TextField
          className={classes.textField}
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;

// Higher-order component to check for access token
export function withAuth(Component) {
  return function AuthComponent(props) {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };
}
