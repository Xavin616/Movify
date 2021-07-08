import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
//import { SearchRounded } from "@material-ui/icons";
//import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px 20px',
        flexGrow: 1, 
    },
    header: {
        padding: '2px 5px',
        position: 'static',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            padding: 2,
        },
    },
    title: {
        flexGrow: 1,
        marginLeft: '15px',
        fontFamily: 'Pacifico, cursive',
        color: 'cyan',
        fontSize: '1.665em',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            margin: 'auto auto auto 20px',
            fontSize: '1.5em',
        },
    },
    button: {
        color: 'cyan',
        fontSize: '3rem',
        transform: 'scale(1.5)',
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
    const classes = useStyles();

    return (
        <header>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        <Link to='/'>
                            Movify
                        </Link>
                    </Typography>
                    {/*<div className={classes.menulist}>
                        {getMenuData}
                    </div>*/}
                        <Link to='/upcoming'>
                            <IconButton
                                className={classes.icons}
                            >
                                New Movies
                            </IconButton>
                        </Link>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;