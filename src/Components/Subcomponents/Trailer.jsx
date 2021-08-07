import React from 'react';
import { useState, useEffect } from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import VideoComp from './VideoComp';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundColor: 'transparent',
        padding: 25,
        color: 'white',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            padding: 10,
        },
    },
    
    gridList: {
        width: 100 + '%',
        height: 'max-content',
        display: 'flex',
        padding: '8px 2px 0px 2px',
        overflow: 'scroll auto',
    },
}))

function Trailer(props) {
    const classes = useStyles();
    const str = props.media;
    const id = props.id;

    let vidurl = `https://api.themoviedb.org/3/${str}/${id}/videos?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    
    // State management: Trailer Videos
    const [vid, setVid] = useState(null);
    //eslint-disable-next-line
        useEffect(() => {
            axios.get(vidurl)
                .then(response => {
                    console.log(response.data);
                    let viddata = response.data.results;
                    setVid(viddata);
                })
        }, [vidurl])

    let trailer_list;

    if (vid) {
        const list = vid.slice(0, 7);
        trailer_list = list.map((trailer, key) => 
            <VideoComp framekey={trailer.key}/>
        )
}

    return (
        <div id="trailer">
            <Paper className={classes.paperContainer}>
                <Typography 
                    style={{ fontFamily: 'Source Sans Pro, sans-serif', fontSize: '1.6em',marginLeft: 8, fontWeight: 'bold', padding: '11.5px 4px 4px 4px',}}
                    variant={'h5'}
                >
                    Trailers
                </Typography>
                <Box className={classes.gridList}>
                    {trailer_list}
                </Box>
            </Paper>
        </div>
    )
}

export default Trailer
