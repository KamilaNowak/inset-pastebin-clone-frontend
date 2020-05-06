import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
import Auth from "../authentication/Auth"
import { TOKEN } from "../constants/ConstantVariables";
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    buttonStyle: {
        color:'white',
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
      },
    logoutButton: {
        marginLeft: '0px',
      }
  }));


function onLogoutHandler() {
    
  }

export function Navbar(){
    const classes = useStyles();

    return(
       <div className="{classes.root}">
            <AppBar position="static" style={{ background: '#993399' }}>     
            <Toolbar>
                    <Link to="/">
                        <Typography variant="h6" className={classes.title} style={{marginRight:'40px'}}>
                            <span className="app-mylogo">
                                Inset
                            </span>
                        </Typography>         
                    </Link>
                        <Button > 
                                <Link to="/" >
                                    <span className={classes.buttonStyle}>Dashboard</span>
                                </Link>
                        </Button>
                        <Button>
                               <Link to="/" >
                                <span className={classes.buttonStyle}>My pastes</span>
                                </Link>
                        </Button>
                
                        <Button
                                 variant="contained" 
                                 startIcon={<HowToRegOutlinedIcon/>}
                                 color="default" >
                            <Link to="/account">
                                <span className="{classes.logoutButton">Account</span>
                            </Link>

                        </Button>
                </Toolbar>
        </AppBar>
       </div>
       )
}

export default Navbar;