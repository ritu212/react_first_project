import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { findByLabelText } from "@testing-library/react";
import Welcome from "./Welcome";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(2),
    justifyContent: "center",
    display: "flex",
  },
  form: {
    margin: theme.spacing(1),
  },
  root: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  divbutton: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    color: "white",
    fontSize: "1rem",
  },
}));

function LoginComponent() {
  const classes = useStyles();
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function updateEmailText(e) {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      email: value,
    }));
    setEmailError(false);
  }

  function updatePasswordText(e) {
      const {value} = e.target;
      setFormData((prevState)=>({
          ...prevState,
          password:value
      }));
      setPasswordError(false);
  }
  function validate(e) {
    e.preventDefault();
    if (formData.email === "") setEmailError(true);
    if (formData.password === "") setPasswordError(true);
  }
  return (
    <div>
      {/* <AppBar position='static'>
            <Toolbar>
                <Typography>WELCOME</Typography>
                <div className={classes.divbutton}>
                <Button variant="text" className={classes.button}> SignUp</Button>
                <Button variant="text" className={classes.button}>Login</Button>
                </div>
            </Toolbar>
        </AppBar> */}
      {/* <Welcome /> */}
      <Container maxWidth="xs">
        <Typography variant="h5" className={classes.heading}>
          Login
        </Typography>
        <form className={classes.root}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth={true}
            className={classes.form}
            onChange={updateEmailText}
            error={emailError}
            helperText={emailError?"Please enter the value for this field":""}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth={true}
            className={classes.form}
            onChange = {updatePasswordText}
            error = {passwordError}
            helperText = {passwordError?"Please enter the value for this field":""}
          />
          <Button
            variant="contained"
            fullWidth={true}
            className={classes.form}
            onClick={validate}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default LoginComponent;
