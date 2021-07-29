import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: 450,
        height: 253,
        margin: '0px 12px 9px 12px',
        //eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            height: 152,
            width: 270,
        },
    },
}));

function VideoComp(props) {

    const classes = useStyles();
    const key = props.framekey;

    return (
        <div className="trailer-vid">
            <iframe
                className={classes.frame} 
                src={'https://www.youtube.com/embed/' + key}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen='allowfullscreen'>
            </iframe>
        </div>
    )
}

export default VideoComp
