import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Welcome from "./Welcome";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  form: {
    margin: theme.spacing(1),
  },
  heading: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
  appbar: {
    flexGrow: 1,
    backgroundColor: "#009688",
  },
  button: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "right",
  },
  eye: {
    cursor: "pointer",
  },
}));

function SignUpComponent() {
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordToggle, setPasswordToggle] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [
    confirmPasswordErrorMessage,
    setConfirmPasswordErrorMessage,
  ] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const classes = useStyles();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSignUp = (e) => {
    console.log("clicked on signUp");
  };
  const handleLogin = (e) => {
    console.log("clicked on log in");
  };
  const handleEmailText = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError(true);
      setEmailErrorMessage("Invalid email");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }
    const {value} = e.target
    setFormData((prevState) => ({ ...prevState, email: value }));
  };

  const handlePasswordText = (e) => {
    e.preventDefault();
    if (validatePassword(e.target.value)) {
      setPasswordError(false);
      setPasswordErrorMessage("");
    } else {
      setPasswordError(true);
      setPasswordErrorMessage("Invalid Password:Minimum 8 characters required");
    }
    setPassword(e.target.value);
    setFormData((prevState) => ({ ...prevState, password: {password} }));
  };
  function validateEmail(email) {
    return new RegExp(emailRegex).test(email);
  }
  function validatePassword(password) {
    if (password.length >= 8) return true;
    return false;
  }
  function togglePasswordMask(e) {
    e.preventDefault();
    setPasswordToggle(!passwordToggle);
  }
  function checkPassword(e) {
    e.preventDefault();
    if (password !== e.target.value) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Password doesn't match");
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage("");
    }
    const {value} = e.target.value
    setFormData((prevState) => ({
      ...prevState,
      confirmPassword: value,
    }));
  }
  function validate(e) {
    e.preventDefault();
    if (formData.email === "") {
      setEmailError(true);
      setEmailErrorMessage("Field is required");
    }
    if (formData.password === "") {
      setPasswordError(true);
      setPasswordErrorMessage("Field is required");
    }

    if (formData.confirmPassword === "") {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Field is required");
    }
  }
  return (
    <div>
      {/* <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.appbar}>Welcome</Typography>
          <Button variant="text" onClick={handleSignUp}>
            SignUp
          </Button>
          <Button variant="text" onClick={handleLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar> */}
      {/* <Welcome /> */}
      <Container maxWidth="xs">
        <Typography variant="h5" className={classes.heading}>
          Sign Up
        </Typography>
        <form className={classes.root}>
          <TextField
            variant="outlined"
            label="Email"
            fullWidth={true}
            className={classes.form}
            required={true}
            onChange={handleEmailText}
            error={emailError}
            helperText={emailErrorMessage}
          />
          <TextField
            variant="outlined"
            label="Password"
            fullWidth={true}
            className={classes.form}
            required={true}
            onChange={handlePasswordText}
            error={passwordError}
            helperText={passwordErrorMessage}
            type={passwordToggle ? "password" : "text"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {passwordToggle ? (
                    <VisibilityOffIcon
                      className={classes.eye}
                      onClick={togglePasswordMask}
                    ></VisibilityOffIcon>
                  ) : (
                    <VisibilityIcon
                      className={classes.eye}
                      onClick={togglePasswordMask}
                    ></VisibilityIcon>
                  )}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            label="Confirm Password"
            fullWidth={true}
            className={classes.form}
            required={true}
            onChange={checkPassword}
            type="password"
            error={confirmPasswordError}
            helperText={confirmPasswordErrorMessage}
          />
          <Button variant="contained" fullWidth={true} onClick={validate}>
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default SignUpComponent;
