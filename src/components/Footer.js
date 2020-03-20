import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#e6e6e6",
        padding: theme.spacing(1,0),
    }
}))

const Footer =()=> {

    const classes = useStyles();

    return (
        <footer className ={classes.footer}>
            <Container>
                    <Typography variant="subtitle1" align="center" color="textSecondary">
                     If you are pleased by vistiting this page - give me a star on 
                        <Button>
                         <a href="https://github.com/KamilaNowak/inset-pastebin-clone" > Github</a>
                        </Button>
                    </Typography>
            </Container>
        </footer>
    )
}
export default Footer;