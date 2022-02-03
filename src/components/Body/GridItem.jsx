import React from 'react';
import { Grid, Paper, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        borderRadius: 0,
        height: '100%',
        padding: '15px 8px 8px 12px',
        backgroundColor: '#0000009e',
        backgroundBlendMode: 'multiply',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '5px 5px 5px 0px',
        },
        overflow: 'hidden',
    },
    heading: {
        marginLeft: 11,
        marginBottom: '10px',
        marginTop: 16,
        color: 'white',
        fontWeight: 400,
        fontSize: '1.50em',
        fontFamily: 'Source Sans Pro, sans-serif',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '1.25em',
            fontWeight: 'bold',
            marginTop: 12,
        },
        '&:hover': {
            color: 'cyan',
        }
        
    },
    gridList: {
        width: 100 + '%',
        maxHeight: '342px',
        display: 'flex',
        padding: '2px 5px 0px 15px',
        overflow: 'scroll hidden',
    }
}))


function GridItem(props) {
    const styles = useStyles()

    return (
            <Grid item xs={12}>
                <Paper className={styles.paper}>
                     <div className="header">
                        <Typography className={styles.heading} variant="h4">
                            <Link to={props.link}>
                                {props.name}
                            </Link>
                        </Typography>
                     </div>
                     <Box className={styles.gridList}>
                         {props.content}
                     </Box>
                 </Paper>
            </Grid>
        )
}

export default GridItem
