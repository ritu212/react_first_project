import React from "react";
import { Container, Typography, TextField, Button, Toolbar, AppBar } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) =>({
    heading:{
        marginTop : theme.spacing(2),
        justifyContent : "center",
        display : "flex"
    },
    form:{
        margin : theme.spacing(1),
    },
    root:{
        margin:theme.spacing(2),
        display:'flex',
        flexDirection:'column'
    },
    divbutton:{
        display:'flex',
        flex:1,
        justifyContent:"flex-end",
    },
    button:{
        color:'white',
        fontSize:'1rem'
    }
}));
function LoginComponent() {
    const classes = useStyles();
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography>WELCOME</Typography>
                <div className={classes.divbutton}>
                <Button variant="text" className={classes.button}> SignUp</Button>
                <Button variant="text" className={classes.button}>Login</Button>
                </div>
            </Toolbar>
        </AppBar>
    <Container maxWidth="xs">
      <Typography variant="h5" className={classes.heading}>Login</Typography>
      <form className = {classes.root}>
        <TextField label="Email" variant="outlined" fullWidth={true} className = {classes.form}/>
        <TextField label="Password" variant="outlined" fullWidth={true} className = {classes.form} />
        <Button variant = "contained" fullWidth={true} className = {classes.form}>Login</Button>
      </form>
    </Container>
    </div>
  );
}

export default LoginComponent;
