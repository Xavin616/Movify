import React from "react";
import { useMediaQuery } from "./Subcomponents/Query";
import { makeStyles } from "@material-ui/core";
import { AppBar, Typography, Tabs, Tab } from "@material-ui/core";
//import { SearchRounded } from "@material-ui/icons";
//import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        padding: '12px 12px 0px 12px',
        display: 'inline-flex',
        flexDirection: 'row',
    },
    title: {
        flexGrow: 0,
        padding: 5,
        margin: '3px 10px 10px 45px',
        fontFamily: 'Pacifico, cursive',
        color: 'cyan',
        fontSize: '1.78em',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            margin: '10px -30px 0px 2.5px',
            fontSize: '1.3em',
            fontWeight: 'bolder',
        },
    },
    tabName: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1.1em',
        fontFamily: 'Source Sans Pro, san serif ',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.95em',
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

    const lookUp = {
        '/tv': 0,
        '/movies': 1,
        '/new': 2,
        0: '/tv',
        1: '/movies',
        2: '/news'
    }
    
    let pathname = window.location.pathname;

    const [value, setValue] = useState(lookUp[pathname])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    }

    return (
            <AppBar position="static" className={classes.root}>
                    <Typography variant="h5" className={classes.title}>
                        <Link to='/'>
                            {name}
                        </Link>
                    </Typography>
                    <Tabs 
                        style={{margin: '5px 10px 0px 40px', position: 'relative', bottom: 0, left: 0,}} 
                        value={value} 
                        onChange={handleChange} 
                        aria-label="simple tabs example"
                    >
                        <Tab href='/tv' className={classes.tabName} style={{color: 'white',}} onclick={window.location} label={button1}/>
                        <Tab href ='/movies' className={classes.tabName} style={{color: 'white',}} label={button2}/>
                        <Tab href='/new' className={classes.tabName} style={{color: 'white',}} label={button3} />
                    </Tabs>
            </AppBar>
    )
}

export default Header;