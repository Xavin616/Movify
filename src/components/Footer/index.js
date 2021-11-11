import React from 'react';
import {ReactComponent as ReactLogo} from '../images/tmdb-2.svg';
import templar from '../images/logo-templar.png';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer:{
        padding: '85px 170px 15px 150px',
        position: 'relative',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
            padding: '50px 10px 15px 10px',
        },
    },
    companies: {
        padding: '10px 50px 10px 50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
            textAlign: 'center',
            padding: '8px 10px 20px 30px',
            justifyContent: 'center',
        },
    },
    company1: {
        width: '300px',
        display: 'flex',
        alignItems: 'center',
         // eslint-disable-next-line
         ['@media (max-width:400px)']: {
            marginLeft: 30,
        },
    }, 
    company2: {
        display: 'flex',
        alignItems: 'center',
        width: '305px',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
            padding: '20px 0px 0px 10px',
        },
    }, 
    logo:{
        width: '175px',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
            padding: '8px 0px 0px 8px',
        },
    },
    letters:{
        color: 'cyan',
        fontWeight: '400',
        margin: '0px 20px 20px 10px',
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '1.3em',
    },
    logo2:{
        width: '100px',
        float: 'right',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.6em',
        },
    },
}))

function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <div className={classes.companies}>
                <div className={classes.company1}>
                    <Typography className={classes.letters}>
                        Powered by
                    </Typography>
                    <ReactLogo className={classes.logo2}/>
                </div>
                <div className={classes.company2}>
                    <Typography className={classes.letters} style={{color: 'red', marginTop: 5,}}>
                        Created by
                    </Typography>
                    <img src={templar} alt="Templar" className={classes.logo} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
