import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 15,
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: 'yellow',
        animation: 'shake 30s cubic-bezier(.36, .07, .19, .97) both infinite',
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        '&:hover': {
            backgroundColor: 'red',
        },
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            width: 165,
            height: 50,
            padding: 5,
        },
    },
    icon: {
        color: 'black',
        marginRight: 10,
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '2em',
            marginRight: 8,
        },
    },
    words: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Source Sans Pro, sans-serif',
        textTransform: 'none',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '1.6em',
            fontWeight: '400',
            marginBottom: 2,
        },
    },
}))

function Donate() {
    const styles = useStyles()

    return (
        <div id="donate"> 
            <a href="https://paystack.com/pay/movify" target='_blank' rel='noreferrer'>
                <Button id='donate-button' classes={{
                    root: styles.root,
                }}>
                    <MonetizationOnIcon fontSize='1.7em' className={styles.icon} />
                    <Typography className={styles.words}>
                        Support Us
                    </Typography>
                </Button>
            </a>
        </div>
    )
}

export default Donate
