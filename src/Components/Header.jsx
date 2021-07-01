import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { AccountCircle} from "@material-ui/icons";
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px 20px',
        flexGrow: 1, 
    },
    header: {
        padding: '10px 5px',
        position: 'static',
        backgroundColor: '#1b1b1b', 
    },
    title: {
        marginLeft: '15px',
        flexGrow: 1,
        fontFamily: 'Pacifico, cursive',
        color: 'cyan', 
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
    }
}))



function Header() {
    const classes = useStyles();

    return (
        <header>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Movify
                    </Typography>
                    {/*<div className={classes.menulist}>
                        {getMenuData}
                    </div>*/}
                    <IconButton 
                        color='primary'
                    >
                        <NotificationsIcon 
                        fontSize='large'/>
                    </IconButton>
                    <IconButton 
                        color='primary'
                    >
                        <AccountCircle 
                        fontSize='large'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;