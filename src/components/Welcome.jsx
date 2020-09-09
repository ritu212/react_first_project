import React from 'react'
import { AppBar, Typography, Toolbar, Button, makeStyles } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    button:{
        color:'white',
        fontSize:'1rem',
    }
}));
function Welcome() {
    const classes=useStyles();
    const history=useHistory();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography>WELCOME</Typography>
                <div className={classes.root}>
                <Button variant="text" className={classes.button} onClick={()=>history.push('/SignUp')}>SignUp</Button>
                <Button variant="text" className={classes.button} onClick={()=>history.push('/Login')}>Login</Button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Welcome;