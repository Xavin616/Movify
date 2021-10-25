import React, { useState, useEffect } from 'react';
import { Box, Paper, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import CustomCard from '../subcomponents/CustomCard';
import axios from 'axios';
import load from '../images/sideload.gif';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'transparent',
        padding: 5,
        height: 'auto',
    },
    headline:{
        color: 'white',
        fontFamily: 'Source Sans Pro, sans-serif', 
        fontSize: '1.6em', 
        margin: '10px 0px 6px 8px', 
        fontWeight: 'bold', 
        padding: '11.5px 4px 4px 4px',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '1.2em',
            margin: '0px 0px 0px 8px',
        },
    },
    gridList: {
        display: 'flex',
        width: 100+'%',
        overflow: 'scroll hidden',
        height: 'min-content',
        paddingLeft: 15,
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            paddingLeft: 0,
        },
    },
}))

const useCardSASS = makeStyles((theme) => ({
    root: {
        margin: '10px 10px 5px 19px',
        width: 300,
        height: 'auto',
        padding: 0,
        backgroundColor: 'transparent',
        position: 'relative',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            width: 270,
            margin: '0px 5px 5px 19px',
            padding: '10px 15px 10px 5px',
        },
    },
    media: {
        width: '100%',
        height: 'auto',
        borderRadius: 8,
    },
    content: {
        padding: '10px 0px 0px 5px',
        color: 'white',
        backgroundColor: '#06080670',
        width: '100%',
        height: '30%',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
            padding: '8px 0px 0px 8px',
        },
    },    
    title: {
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '0.98em',
        fontWeight: 'bold',
    },
}))

function Recommendations(props) {
    let id = props.id;
    let str = props.media;
    let url = `https://api.themoviedb.org/3/${str}/${id}/recommendations?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    const styles = useStyles();
    const classes = useCardSASS();

    const [recom, setRecom] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                setRecom(response.data.results);
            })
    }, [url])

    let mediaList;

    if (recom.length !== 0) {
        let list = recom.slice(0, 20);
        mediaList = list.map((result, key) => 
            <Grid item xs={9}>
                <CustomCard 
                    id={result.id}
                    type={str}
                    classes={classes}
                    title={result.original_title || result.original_name}
                    image={result.backdrop_path !== null ? 'https://image.tmdb.org/t/p/original'+ result.backdrop_path : load}
                />
            </Grid>
        )
        return (
            <div>
                <Paper className={styles.paper}>
                    <Typography 
                        className={styles.headline}
                        variant={'h5'}
                    >
                        If you liked this {str === 'tv' ? 'Tv Series' : 'Movie'}
                    </Typography>
                    <Box className={styles.gridList}>
                        {mediaList}
                    </Box>
                </Paper>            
            </div>
        )
    } else if (recom.length === 0) {
        return (
            <></>
        )
    }

}

export default Recommendations;
