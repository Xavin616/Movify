import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Paper, Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
    body {
        color: white;
        background-color: #060806;
    }
    .makeStyles-header-2 {
        background-color: #060806;
        box-shadow: none;
        color: #1b1b1b;
    }
    .makeStyles-title-3 {
        color: cyan;
    }
`

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        color: 'white',
        padding: 30,
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            padding: 10,
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
            height: 300,
            width: 200,
            float: 'none',
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
            fontSize: '2em',
        },
    },
    overview: {
        color: 'white',
        marginTop: 0,
        marginLeft: 5,
    },
    properties: {
        padding: 0,
    },
    listProps: {
        textAlign: 'center',
        display: 'flex',
        padding: 0,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        margin: '0px 0px 15px 0px',
        width: 100 + '%',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            width: 100+'%', 
            textAlign: 'center',
        },
    },
    listItem:{
        listStyleType: 'none',
        margin: '4px 8px 2px 8px',
    },
    tab: {
        marginLeft: '8px',
    },
}))

function ItemPage() {
    const { id, str } = useParams()

    let vidurl = `https://api.themoviedb.org/3/${str}/${id}/videos?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    let url = `https://api.themoviedb.org/3/${str}/${id}?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    
    let content;
    let properties;
    let img_url;
    let image;
    let title;

    const classes = useStyles()
    const [item, setItem] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setItem(response.data)
            })
    }, [url])

    if (item) {

        //title = item.original_title;
        (str === 'movie' ? title = item.original_title : title = item.original_name);
        img_url = 'https://image.tmdb.org/t/p/original' + item.backdrop_path;
        image = "https://image.tmdb.org/t/p/original" + item.poster_path;
        content = item.overview; 
        let lists = [];
        const genrate = (list) => {
            for (var v = 0;  v < list.length; v++) {
                console.log(list[v].name);
                lists.push(list[v].name);
            }
            return lists.join(', ')
        }
        let genres = genrate(item.genres);
        properties = <ul className={classes.listProps}>
            <li className={classes.listItem}><span>{item.vote_average}</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>{item.release_date || item.first_air_date}</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>{item.spoken_languages[0].english_name}</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>{genres}</span></li>
            <li className={classes.listItem}>&#9679;<span className={classes.tab}>Status: {item.status}</span></li>
        </ul>
    }

    const [vid, setVid] = useState(null);

    useEffect(() => {
        axios.get(vidurl)
            .then(response => {
                //console.log(response.data);
                let viddata = response.data;
                setVid(viddata);
            })
    }, [vidurl])


    return (
        <div>
            <GlobalStyle />
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

export default ItemPage