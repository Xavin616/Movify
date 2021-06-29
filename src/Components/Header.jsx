import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { AccountCircle} from "@material-ui/icons";
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px 30px',
        flexGrow: 1, 
    },
    header: {
        padding: '12px',
        position: 'static',
        marginBottom: '20px',
        backgroundColor: '#1b1b1b', 
    },
    title: {
        marginLeft: '40px',
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



function Header(props) {
    const classes = useStyles();
    const menuData = ['New', 'Popular', 'Upcoming'];
    const getMenuData = menuData.map((label) => 
             <Button color="primary" size="large">
                {label}
            </Button>
    )

    return (
        <header>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Movily
                    </Typography>
                    <div className={classes.menulist}>
                        {getMenuData}
                    </div>
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