import React from 'react';
import { Paper, Button, Card, CardMedia, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { genrate } from './Query';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundColor: 'transparent',
        padding: 25,
        color: 'white',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            padding: 15,
        },
    },
    flexContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 100+'%',
        flexDirection: 'row',
    },
    cardHolder: {
        padding: '0px 10px 0px 10px',
        flexBasis: 35+'%',
        flex: 1,
    },
    root: {
        float: 'right',
        margin: '0 auto',
        minWdith: 260,
        maxWidth: 300,
        border: 'none',
        backgroundColor: 'transparent',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            height: 'auto',
            width: 180,
            float: 'none',
            marginTop: 10,
        },
    },
    media: {
        height: 'auto',
    },
    content: {
        flexBasis: 65+'%',
        flex: 1,
        padding: '10px 40px',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            textAlign: 'center',
            padding: '10px 10px',
        },
    },
    body:{
        width: 86+'%',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            //textAlign: 'center',
            width: 100+'%',
        },
    },
    name: {
        color: 'white',
        fontWeight: '800',
        marginTop: 5,
        marginBottom: 8,
        marginLeft: 5,
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            textAlign: 'center',
            fontSize: '1.65em',
            margin: '5px 0px 8px 0px',
        },
    },
    overview: {
        color: 'white',
        marginTop: 20,
        fontFamily: 'Source Sans Pro, sans-serif',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            fontSize: '0.85em',
        },
    },
    btngrp: {
        marginTop: '15px ',
    },
    btn: {
        marginLeft: 10,
        marginRight: 5,
        backgroundColor: 'red',
        fontWeight: 'bolder',
        textTransform: 'none',
        fontSize: '0.95em',
        borderRadius: '6px',
        fontFamily: 'Source Sans Pro, sans-serif',
        '&:hover': {
            backgroundColor: 'cyan',
        }
    },
    tag: {
        marginTop: -6,
        fontStyle: 'italic',
        marginLeft: 8,
        marginBottom: 22,
    },
    properties: {
        padding: 0,
    },
    listProps: {
        marginTop: 25,
        textAlign: 'center',
        display: 'flex',
        padding: 0,
        fontSize: '0.9em',
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontFamily: 'Source Sans Pro, sans-serif',
        margin: '0px 0px 15px 0px',
        width: 100 + '%',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            width: 100+'%', 
            fontSize: '0.87em',
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    listItem:{
        listStyleType: 'none',
        margin: '4px 8px 2px 8px',
    },
    tab: {
        marginLeft: '8px',
    },
    gridList: {
        width: 100 + '%',
        height: 'max-content',
        display: 'flex',
        padding: '8px 5px 0px 5px',
        overflow: 'scroll auto',
    },
}))

function Main(props) {
    const str = props.str;
    const id = props.id;
    const classes = useStyles()

    let url = `https://api.themoviedb.org/3/${str}/${id}?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    //let image_url = `https://api.themoviedb.org/3/${str}/${id}/images?api_key=546988151aeca0994227ca10917c13db&language=en-US`

    let content;
    let properties;
    let img_url;
    let image;
    let title;
    let tag;

    const [item, setItem] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setItem(response.data)
            })
    }, [url])

    if (item) {
        tag = item.tagline;
        //title = item.original_title;
        (str === 'movie' ? title = item.original_title : title = item.original_name);
        img_url = 'https://image.tmdb.org/t/p/original' + item.backdrop_path;
        image = "https://image.tmdb.org/t/p/original" + item.poster_path || item.backdrop_path;
        content = item.overview;
        let genres = genrate(item.genres, 'name');
        properties = <ul className={classes.listProps}>
            <li className={classes.listItem}><span>Rating:  {item.vote_average * 10}%</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>{item.release_date || item.first_air_date}</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>{item.spoken_languages === [] ? 'English' : (genrate(item.spoken_languages, 'english_name'))}</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>{genres}</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>Status: {item.status}</span></li>
        </ul>
    }

    return (
        <div>
            <Paper 
                style={{
                    backgroundImage: `url(${img_url})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundColor: 'rgb(32 32 32 / 93%)',
                    backgroundBlendMode: 'multiply',
                    backgroundPosition: '100% 0%',
                }} 
                elevation={0} 
                className={classes.paperContainer}>
                <div className={classes.flexContainer}>
                    <div className={classes.cardHolder}>
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={image}
                                component='img'
                            />
                        </Card>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.body}>
                            <Typography variant={'h4'} component={'h4'} className={classes.name}>
                                {title}
                            </Typography>
                            <p className={classes.tag}>{tag}</p>
                            <div className={classes.btngrp}>
                                <a href='#trailer'>
                                    <Button className={classes.btn} variant='contained'>
                                        <PlayArrowIcon />
                                        Trailers
                                    </Button>
                                </a>
                                <a href='#download'>
                                    <Button className={classes.btn} variant='contained'>
                                        Download
                                    </Button>
                                </a>
                            </div>
                            <div className={classes.properties}>
                                {properties}
                            </div>
                            <Typography className={classes.overview} variant={'body1'}>
                                {content}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default Main
