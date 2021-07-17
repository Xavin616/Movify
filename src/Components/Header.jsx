import React from "react";
import { useMediaQuery } from "./Subcomponents/Query";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
//import { SearchRounded } from "@material-ui/icons";
//import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1px 10px',
        flexGrow: 0, 
    },
    header: {
        margin: 0,
        padding: '-2px 2px',
        position: 'static',
        backgroundColor: '#060806',
        boxShadow: 'none',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            padding: 0,
        },
    },
    title: {
        flexGrow: 0,
        marginLeft: '40px',
        fontFamily: 'Pacifico, cursive',
        color: 'cyan',
        fontSize: '1.48em',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            margin: '10px -30px 10px 2.5px',
            fontSize: '1.3em',
            fontWeight: 'bolder',
        },
    },
    buttongroup: {
        margin: '0 0 0 45px',
        // eslint-disable-next-line
        ['media (max-width: 400px)']: {
            margin: '0 0 0 15px',
            padding: 0,
        }
    },
    btn: {
        color: 'white',
        fontSize: '0.95em',
        textTransform: 'none',
        margin: '0px 10px 0px 10px',
        padding: 10,
        fontWeight: 'bolder',
        fontFamily: 'Source Sans Pro, sans-serif',
        // eslint-disable-next-line
        ['media (max-width: 400px)']: {
            margin: 0,
            padding: 2,
        }
    },
    menulist: {
        position: 'relative',
        marginLeft: 0,
        marginRight: '100px',
        fontSize: '2rem',
    },
    icons: {
        color: 'cyan', 
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            display: 'none',
        },
    }
}))


function Header() {
    let name;
    let button1; 
    let button2; 
    let button3;
    let isPageSmall = useMediaQuery('(max-width:400px)')
    const classes = useStyles();

    if (isPageSmall) { 
        name = 'M';
        button1 = 'Tv';
        button2 = 'Movies';
        button3 = 'New';
    } else { 
        name = 'Movify';
        button1 = 'Tv Shows';
        button2 = 'Movies';
        button3  = 'New, Coming, Latest';
    }

    return (
        <header>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Link to='/'>
                            {name}
                        </Link>
                    </Typography>
                    <div className={classes.buttongroup}>
                        <Link to='/category/tv/top_rated'>
                            <Button size={'small'} className={classes.btn}>
                                {button1}
                            </Button>
                        </Link>
                        <Link to='/category/movie/top_rated'>
                            <Button size={'small'} className={classes.btn}>
                                {button2}
                            </Button>
                        </Link>
                        <Link>
                            <Button size={'small'} className={classes.btn}>
                                {button3}
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;